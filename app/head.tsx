import Script from 'next/script'

const Head = () => {
  return (
    <>
      <title>Countries around the world</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="This website possibility you to search for coutries around de world"
      />
      <Script
        id="default-theme"
        dangerouslySetInnerHTML={{
          __html: (() => {
            return `!function(){try{var e=window.localStorage.getItem('theme');if(e!==null){document.documentElement.classList.add(e);}else{var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches) {document.documentElement.classList.add('dark');}}} catch(e){}}()`
          })(),
        }}
      />
    </>
  )
}

export default Head
