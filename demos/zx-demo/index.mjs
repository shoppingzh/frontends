#!/usr/bin/env zx

const name = 'zx'

await $`echo 'hello, ${name}!'`

const node = await which('node')
console.log(node)
