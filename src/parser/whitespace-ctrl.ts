import { assign } from 'src/util/underscore'
import DelimitedToken from 'src/parser/delimited-token'
import Token from 'src/parser/token'
import TagToken from 'src/parser/tag-token'
import { LiquidOptions } from 'src/liquid-options'

export default function whiteSpaceCtrl (tokens: Token[], options: LiquidOptions) {
  options = assign({ greedy: true }, options)
  let inRaw = false

  tokens.forEach((token: Token, i: number) => {
    if (shouldTrimLeft(token as DelimitedToken, inRaw, options)) {
      trimLeft(tokens[i - 1], options.greedy)
    }

    if (token.type === 'tag' && (token as TagToken).name === 'raw') inRaw = true
    if (token.type === 'tag' && (token as TagToken).name === 'endraw') inRaw = false

    if (shouldTrimRight(token as DelimitedToken, inRaw, options)) {
      trimRight(tokens[i + 1], options.greedy)
    }
  })
}

function shouldTrimLeft (token: DelimitedToken, inRaw: boolean, options) {
  if (inRaw) return false
  if (token.type === 'tag') return token.trimLeft || options.trim_tag_left
  if (token.type === 'output') return token.trimLeft || options.trim_value_left
}

function shouldTrimRight (token: DelimitedToken, inRaw: boolean, options) {
  if (inRaw) return false
  if (token.type === 'tag') return token.trimRight || options.trim_tag_right
  if (token.type === 'output') return token.trimRight || options.trim_value_right
}

function trimLeft (token: Token, greedy: boolean) {
  if (!token || token.type !== 'html') return

  const rLeft = greedy ? /\s+$/g : /[\t\r ]*$/g
  token.value = token.value.replace(rLeft, '')
}

function trimRight (token: Token, greedy: boolean) {
  if (!token || token.type !== 'html') return

  const rRight = greedy ? /^\s+/g : /^[\t\r ]*\n?/g
  token.value = token.value.replace(rRight, '')
}
