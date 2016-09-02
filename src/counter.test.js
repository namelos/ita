import { counter } from './counter'
import test from 'ava'

const actions = {
  inc: { type: 'inc' },
  dec: { type: 'dec' },
  foo: { type: 'foo' }
}

test('starts from 0', t =>
  t.is(0, counter(undefined, actions.foo)))

test('returns 2 when inc from 1', t =>
  t.is(2, counter(1, actions.inc)))

test('returns 1 when dec from 2', t =>
  t.is(1, counter(2, actions.dec)))