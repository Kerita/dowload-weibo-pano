
function getUrl() {
  if (window.location.href.indexOf('https://m.weibo.cn/z/panorama?oid=') === -1) {
      alert('这里没有全屏打开的微博全景图！')
      return
    }
    const script = document.getElementsByTagName('script')[0]
    eval(script.innerHTML)
    url = $render_data.data.ld_url
    const urls = url.split('.')
    if (urls[urls.length - 1].length >= 5) {
      url += '.jpg'
    }
    console.log(url)
    return url
}
  
  new Array(getUrl())
