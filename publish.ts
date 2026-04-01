import { execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'

const envFile = resolve(process.cwd(), '.env.local')
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, 'utf8').split('\n')) {
    const eqIndex = line.indexOf('=')

    if (eqIndex === -1) continue

    const key = line.slice(0, eqIndex).trim()
    const value = line.slice(eqIndex + 1).trim()

    if (key) process.env[key] = value
  }
}

const bump = process.argv[2] ?? 'patch'
execSync('npm run build', { stdio: 'inherit' })
execSync(`npm version ${bump}`, { stdio: 'inherit' })
execSync('npm publish', { stdio: 'inherit', env: process.env })
