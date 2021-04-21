const fetch = require('node-fetch')

const BASE_URL = 'https://api.github.com'

exports.handler = async function (event, context) {
  const headers = {
    Accept: 'application/json',
    Authorization: `token ${process.env.GITHUB_API_KEY}`
  }

  const repositories = [
    'AndroidDevBr',
    'Backend-BR',
    'CocoaHeadsBrasil',
    'DotNetDevBR',
    'FrontendBR',
    'FlutterBR',
    'Gommunity',
    'PHPDevBR',
    'QA-Brasil',
    'React-Brasil',
    'UXBrasil',
    'Vuejs-BR'
  ]

  const repository = event.queryStringParameters.repository

  const url = new URL(`${BASE_URL}/repos/${repository}/vagas`)
  url.search = new URLSearchParams({
    state: 'open'
  }).toString()

  try {
    if (!repositories.some(repo => repo === repository)) {
      throw Error('The repository is not valid.')
    }

    const response = await fetch(url, {
      headers
    })

    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText }
    }

    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ jobs: data.open_issues_count })
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify(err.message)
    }
  }
}
