import { createGlobalStyle } from 'styled-components';

export const GlobalStyleIcon = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1558772903989'); /* IE9 */
    src: url('./iconfont.eot?t=1558772903989#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ0AAsAAAAACIgAAAPlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEHINiATYCJAMUCwwABCAFhG0HURt3B8gOJS3BwABQYABAPDzt9+3cmXmy81fEcGmi0TyTNkEo24AEoZEiWyqhiHbSDv/b7ClLdNlc1aLDvCjUB0MbWfev22WlcdHp/xwzXVqD5bfZXCLLohJH4/Ge7w00Ii+aB3wHcifKN4xdeRH7CVSrJmLdzC0WAAeFMSwQOxSJA4eUTqkhh17ZlswtXXwCjT59YF8EwEf/5+M3iAwHkiYzxt57nSMD6d+8XvKQVmurVy4C8MezgC0i4zigEG9KbTuQMHAcoip/Z+MqoOol6ZvX80nPY1/yrFZAFe1IUc1/eGRFEkTLSB0GV1Gw8M3LZpL5NolXJo+FTBI/eIJ72asBFQN8BvwDBm6ZLJ33veVxNweHGY7LPJc79tRkYplfiCvKb94UtBorBDiPbzaL20w8sdhoBDefClzQJ1wBquBMmToUjC70nYwf4AwANeoe2n+Z1SYWt/lnJgt3rgW76zgDJ1isp2IyTNzWhoqGDODRtEw4d6S76crz/t7T5geQPuIFG/bsGiXcZ5woNZlEk8QYjcKbN2fOywk4yS82mer6vUVDbRvWeAkH5801eA565ecX7yNtLRhmsbVal2eLBVlemtBPlDrOeEbJJQkDzZy7ze4L7BF518ZmX4POVkmWSZ5aJmRnSqhUs82fVD1zKj6MZXstVDNORDnN4BSlJz6dKWYu+Hn98R/1aVQw+MddrGUfGYieymLH+1LgGuFLevi9eNC3o+DOAt3uwAYfX473Dv+XBVFTl/2QV/n1lOR6leaAK/WDyOlTyKDJdtmOyhBHG5rq2StWsKG4HnOgjr0cs9G13k9Qp3e/v82bH97a++ebKAL/1eoygH0rchTxqW15CtIU+pBvI8n//3f8N9zhz3JJ/ubAKeCrS9AaWLDfWkDeBX6iXGv+3+5URgBA4UJD3xS5ypZv9QlqnDaBI/Fjq/6xa9L9cRwzQGwJPedDSDorkPW2kQV7HBoD56HVuwLVMXmLB6bQEFGGcFQXgDBuCySjvkA27hKyYO9BY9Y7aI0HAtWT8Fhz4GBQaBYNcQbKMEkdRkk1asIyMmiQzoNklRKnk0KfIoK0nnJjEaHh2XAeVEN6jAn6ajKSYQiMoDUqLBccBpVKDaalNXIoZUIrGUabGBZGlL1TqFSjAqgbaBCOAclgJOpgKFIaaoTbmoHmvp8HIlVRwtE1dRVWEYimR3WPiRAqvAUyT6ZuVXctj9GrRorEYBAwBJqGCiYXWCClGdDAaMt7yUFSjFCVPXxaicJQI6KtLHR+heoZt0FlbN1Eihwlmmh1b7WUGlcy7AycewlbTZJWQqmCUjuW4KSaIihIAwAAAAA=') format('woff2'),
    url('./iconfont.woff?t=1558772903989') format('woff'),
    url('./iconfont.ttf?t=1558772903989') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1558772903989#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`