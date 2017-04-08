import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import '../src/globalStyles'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style
        className="ssr-styles globals"
        dangerouslySetInnerHTML={{
          __html: styleSheet
            .rules()
            .map(rule => rule.cssText)
            .join('\n'),
        }}
      />)
    return { ...page, styles }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Tigrovi</title>
          <link rel="shortcut icon" type="image/x-icon" href="/static/img/favicon.png" />
          <link rel="stylesheet" type="text/css" href="/static/css/switch.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
