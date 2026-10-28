import assert from 'node:assert/strict'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { after, before, test } from 'node:test'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { createMarkdownProcessor } from '@astrojs/markdown-remark'
import remarkDirective from 'remark-directive'

import remarkExcalidraw from '../plugins/remark-excalidraw.ts'

const postPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/content/blogs/_excalidraw-fixture/note.md'
)

const fixtureDir = path.dirname(postPath)

before(() => {
  mkdirSync(fixtureDir, { recursive: true })
  writeFileSync(postPath, '')
  writeFileSync(
    path.join(fixtureDir, 'scene.excalidraw'),
    JSON.stringify({ type: 'excalidraw', version: 2, elements: [] })
  )
  writeFileSync(
    path.join(fixtureDir, 'scene.svg'),
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" /></svg>'
  )
})

after(() => rmSync(fixtureDir, { recursive: true, force: true }))

const render = async (source) => {
  const processor = await createMarkdownProcessor({
    remarkPlugins: [remarkDirective, remarkExcalidraw],
  })
  return processor.render(source, { fileURL: pathToFileURL(postPath) })
}

test(':::excalidraw renders host and static source link', async () => {
  const { code } = await render(
    ':::excalidraw{src="./scene.excalidraw" preview="./scene.svg" alt="示意"}\n:::'
  )
  assert.match(code, /class="[^"]*excalidraw-embed/)
  assert.match(code, /data-excalidraw-viewer/)
  assert.match(code, /data-excalidraw-host/)
  assert.match(code, /href="\.\/scene\.excalidraw"/)
  assert.match(code, /download="/)
  assert.doesNotMatch(code, /blob:/)
  assert.match(code, /Excalidraw 源文件/)
  assert.match(code, /scene\.svg/)
})

test(':::excalidraw works with src only when same-basename preview exists', async () => {
  const { code } = await render(':::excalidraw{src="./scene.excalidraw"}\n:::')
  assert.match(code, /data-excalidraw-host/)
  assert.match(code, /scene\.svg/)
})

test(':::excalidraw allows src-only without any preview image', async () => {
  const soloDir = path.join(fixtureDir, 'solo')
  mkdirSync(soloDir, { recursive: true })
  const scene = path.join(soloDir, 'solo.excalidraw')
  writeFileSync(
    scene,
    JSON.stringify({ type: 'excalidraw', version: 2, elements: [] })
  )
  const mdPath = path.join(soloDir, 'note.md')
  writeFileSync(mdPath, '')
  try {
    const processor = await createMarkdownProcessor({
      remarkPlugins: [remarkDirective, remarkExcalidraw],
    })
    const { code } = await processor.render(
      ':::excalidraw{src="./solo.excalidraw" alt="solo"}\n:::',
      { fileURL: pathToFileURL(mdPath) }
    )
    assert.match(code, /data-excalidraw-host/)
    assert.match(code, /href="\.\/solo\.excalidraw"/)
    assert.doesNotMatch(code, /excalidraw-embed__fallback/)
    assert.doesNotMatch(code, /blob:/)
  } finally {
    rmSync(soloDir, { recursive: true, force: true })
  }
})

test(':::excalidraw rejects library files before publishing an unusable viewer', async () => {
  await assert.rejects(
    render(':::excalidraw{src="./shapes.excalidrawlib"}\n:::'),
    /must be an \.excalidraw scene; library files are not supported/
  )
})

test(':::excalidraw rejects blob src and missing files', async () => {
  await assert.rejects(
    render(':::excalidraw{src="blob:https://example/x"}\n:::'),
    /blob:/
  )
  await assert.rejects(
    render(':::excalidraw{src="./missing.excalidraw"}\n:::'),
    /missing|mirrorable|relative path/i
  )
})
