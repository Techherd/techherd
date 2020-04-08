<template>
  <div class="pageWidth" :class="page + ' ' + darkmode">
    <div class="homeHeader">
      <Header />

      <div class="headerBg">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div class="blueSash accent">
          <div class="text">Making your IT dreams come true.</div>

          <div class="graphic">
            <svg
              width="978"
              height="938"
              viewBox="0 0 978 938"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M922 135.5L0 937.5V-0.5H977.5C977.5 84.5 949.5 108 922 135.5Z"
                fill="url(#paint0b_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0b_linear"
                  x1="482"
                  y1="-80.5511"
                  x2="482"
                  y2="939"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop :stop-color="color1" />
                  <stop offset="1" :stop-color="color2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="contentWidth">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    page() {
      return this.$store.state.currentPage.page
    },
    color1() {
      return this.$store.state.currentPage.color
    },
    color2() {
      return this.$store.state.currentPage.color2
    },
    darkmode() {
      if (this.$store.state.globalSettings.darkmode) {
        return 'darkmode'
      } else {
        return 'lightmode'
      }
    }
  },
  methods: {
    activateDarkMode() {
      this.$store.commit('globalSettings/setLightDark', true)
    },
    activateLightMode() {
      this.$store.commit('globalSettings/setLightDark', false)
    }
  },
  mounted() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isLightMode = window.matchMedia('(prefers-color-scheme: light)')
      .matches
    const isNotSpecified = window.matchMedia(
      '(prefers-color-scheme: no-preference)'
    ).matches
    const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addListener(e => e.matches && this.activateDarkMode())
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addListener(e => e.matches && this.activateLightMode())

    if (isDarkMode) this.activateDarkMode()
    if (isLightMode) this.activateLightMode()
    if (isNotSpecified || hasNoSupport) {
      console.log(
        'You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.'
      )
      now = new Date()
      hour = now.getHours()
      if (hour < 4 || hour >= 16) {
        this.activateDarkMode()
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Google+Sans:300,500,700,900,300i,500i');

:root {
  --stars-color: #fff;
}

html {
  font-family: 'Google Sans', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: var(--stars-color);
}

//cross dissolve transition

.cross-dissolve-enter,
.cross-dissolve-leave-to {
  opacity: 0;
}

.cross-dissolve-enter-to,
.cross-dissolve-leave {
  opacity: 1;
}

.cross-dissolve-enter-active,
.cross-dissolve-leave-active {
  transition: opacity 0.5s;
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100px);
}

.slide-left-leave {
  opacity: 1;
  transform: translateX(0px);
}

.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-left-enter-active {
  transition: 0.5s;
}

.slide-left-leave-active {
  transition: 0.3s;
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-200px);
}

.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.3s;
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100px);
}

.slide-left-leave {
  opacity: 1;
  transform: translateX(0px);
}

.zoom-in-enter-to {
  opacity: 1;
  transform: scale(1);
}

.zoom-in-leave-to {
  opacity: 0;
  transform: scale(0.7);
}

.zoom-in-enter-active {
  transition: 0.5s;
}

.zoom-in-leave-active {
  transition: 0.3s;
}

.zoom-out-enter-to {
  opacity: 1;
  transform: scale(1);
}

.zoom-out-leave-to {
  opacity: 0;
  transform: scale(1.3);
}

.zoom-out-enter-active {
  transition: 0.5s;
}

.zoom-out-leave-active {
  transition: 0.3s;
}

.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-out 0.4s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fade-in 0.4s;
}
.fade-leave-active {
  animation: fade-out 0.4s;
}

@keyframes fade-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}

#stars,
#stars2,
#stars3 {
  position: absolute;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 10px 1221px var(--stars-color), 1399px 1279px var(--stars-color),
    655px 554px var(--stars-color), 1523px 262px var(--stars-color),
    1011px 725px var(--stars-color), 421px 1925px var(--stars-color),
    42px 1121px var(--stars-color), 1577px 460px var(--stars-color),
    350px 1374px var(--stars-color), 692px 50px var(--stars-color),
    1919px 1671px var(--stars-color), 1341px 1205px var(--stars-color),
    1174px 1799px var(--stars-color), 158px 623px var(--stars-color),
    1013px 118px var(--stars-color), 786px 906px var(--stars-color),
    1702px 1787px var(--stars-color), 1770px 1382px var(--stars-color),
    883px 1031px var(--stars-color), 993px 672px var(--stars-color),
    1955px 1596px var(--stars-color), 1492px 1463px var(--stars-color),
    170px 1550px var(--stars-color), 1668px 1584px var(--stars-color),
    1127px 1688px var(--stars-color), 1330px 123px var(--stars-color),
    1937px 1414px var(--stars-color), 593px 1032px var(--stars-color),
    1784px 754px var(--stars-color), 467px 588px var(--stars-color),
    72px 777px var(--stars-color), 1067px 994px var(--stars-color),
    1573px 648px var(--stars-color), 1343px 462px var(--stars-color),
    1864px 354px var(--stars-color), 1736px 1334px var(--stars-color),
    872px 884px var(--stars-color), 451px 228px var(--stars-color),
    434px 729px var(--stars-color), 1587px 1133px var(--stars-color),
    1328px 750px var(--stars-color), 1779px 1963px var(--stars-color),
    723px 161px var(--stars-color), 408px 316px var(--stars-color),
    877px 1020px var(--stars-color), 437px 1223px var(--stars-color),
    509px 628px var(--stars-color), 1759px 514px var(--stars-color),
    619px 1803px var(--stars-color), 1227px 727px var(--stars-color),
    561px 1401px var(--stars-color), 278px 1754px var(--stars-color),
    741px 1044px var(--stars-color), 80px 1181px var(--stars-color),
    248px 1530px var(--stars-color), 1985px 1699px var(--stars-color),
    945px 318px var(--stars-color), 1758px 347px var(--stars-color),
    1225px 1534px var(--stars-color), 993px 1731px var(--stars-color),
    676px 1672px var(--stars-color), 27px 1px var(--stars-color),
    1524px 1908px var(--stars-color), 848px 1539px var(--stars-color),
    1048px 761px var(--stars-color), 14px 1591px var(--stars-color),
    1939px 169px var(--stars-color), 1685px 312px var(--stars-color),
    199px 139px var(--stars-color), 1541px 1803px var(--stars-color),
    1510px 505px var(--stars-color), 1293px 650px var(--stars-color),
    944px 126px var(--stars-color), 1685px 1660px var(--stars-color),
    1730px 885px var(--stars-color), 962px 280px var(--stars-color),
    1474px 780px var(--stars-color), 1456px 1879px var(--stars-color),
    1061px 980px var(--stars-color), 494px 355px var(--stars-color),
    401px 318px var(--stars-color), 1644px 1865px var(--stars-color),
    542px 1261px var(--stars-color), 1673px 782px var(--stars-color),
    1160px 1430px var(--stars-color), 520px 251px var(--stars-color),
    1612px 1069px var(--stars-color), 1300px 1622px var(--stars-color),
    1793px 983px var(--stars-color), 1298px 1351px var(--stars-color),
    1188px 649px var(--stars-color), 229px 1119px var(--stars-color),
    884px 931px var(--stars-color), 1000px 1427px var(--stars-color),
    328px 1248px var(--stars-color), 936px 817px var(--stars-color),
    341px 86px var(--stars-color), 623px 491px var(--stars-color),
    1882px 18px var(--stars-color), 1617px 1806px var(--stars-color),
    715px 460px var(--stars-color), 1040px 802px var(--stars-color),
    1505px 66px var(--stars-color), 89px 739px var(--stars-color),
    611px 146px var(--stars-color), 1375px 1595px var(--stars-color),
    1356px 1480px var(--stars-color), 287px 446px var(--stars-color),
    1088px 1517px var(--stars-color), 19px 1904px var(--stars-color),
    407px 1517px var(--stars-color), 1954px 1292px var(--stars-color),
    955px 476px var(--stars-color), 423px 1599px var(--stars-color),
    843px 1581px var(--stars-color), 341px 891px var(--stars-color),
    521px 1328px var(--stars-color), 561px 879px var(--stars-color),
    1126px 216px var(--stars-color), 1389px 1780px var(--stars-color),
    100px 1063px var(--stars-color), 214px 1679px var(--stars-color),
    881px 3px var(--stars-color), 587px 1024px var(--stars-color),
    1552px 883px var(--stars-color), 1346px 1186px var(--stars-color),
    299px 1680px var(--stars-color), 1229px 1850px var(--stars-color),
    1340px 1607px var(--stars-color), 386px 704px var(--stars-color),
    1176px 35px var(--stars-color), 1981px 392px var(--stars-color),
    1545px 95px var(--stars-color), 1472px 720px var(--stars-color),
    940px 1257px var(--stars-color), 1672px 1009px var(--stars-color),
    1386px 144px var(--stars-color), 538px 660px var(--stars-color),
    530px 1241px var(--stars-color), 863px 1190px var(--stars-color),
    345px 400px var(--stars-color), 866px 351px var(--stars-color),
    191px 158px var(--stars-color), 904px 774px var(--stars-color),
    2px 1293px var(--stars-color), 1269px 1553px var(--stars-color),
    518px 1989px var(--stars-color), 297px 87px var(--stars-color),
    1455px 1677px var(--stars-color), 939px 1910px var(--stars-color),
    1570px 1065px var(--stars-color), 1964px 453px var(--stars-color),
    762px 844px var(--stars-color), 1843px 1415px var(--stars-color),
    232px 114px var(--stars-color), 1435px 1051px var(--stars-color),
    570px 1044px var(--stars-color), 690px 1221px var(--stars-color),
    434px 850px var(--stars-color), 808px 1330px var(--stars-color),
    1333px 1410px var(--stars-color), 196px 877px var(--stars-color),
    1939px 730px var(--stars-color), 1089px 302px var(--stars-color),
    721px 1561px var(--stars-color), 1696px 1951px var(--stars-color),
    61px 1585px var(--stars-color), 382px 1563px var(--stars-color),
    1580px 1382px var(--stars-color), 1372px 1951px var(--stars-color),
    1231px 971px var(--stars-color), 1599px 351px var(--stars-color),
    901px 733px var(--stars-color), 1514px 1633px var(--stars-color),
    815px 1380px var(--stars-color), 1609px 1725px var(--stars-color),
    1441px 377px var(--stars-color), 1821px 1368px var(--stars-color),
    1548px 557px var(--stars-color), 429px 937px var(--stars-color),
    722px 1568px var(--stars-color), 1829px 954px var(--stars-color),
    1265px 739px var(--stars-color), 295px 1922px var(--stars-color),
    264px 1250px var(--stars-color), 1196px 655px var(--stars-color),
    290px 5px var(--stars-color), 1681px 669px var(--stars-color),
    1752px 434px var(--stars-color), 451px 1512px var(--stars-color),
    641px 466px var(--stars-color), 834px 1320px var(--stars-color),
    1932px 1363px var(--stars-color), 267px 793px var(--stars-color),
    1307px 234px var(--stars-color), 310px 281px var(--stars-color),
    795px 151px var(--stars-color), 358px 425px var(--stars-color),
    1059px 1263px var(--stars-color), 1582px 576px var(--stars-color),
    148px 223px var(--stars-color), 936px 1025px var(--stars-color),
    548px 1217px var(--stars-color), 1984px 272px var(--stars-color),
    595px 563px var(--stars-color), 756px 279px var(--stars-color),
    1372px 421px var(--stars-color), 1094px 157px var(--stars-color),
    1428px 1911px var(--stars-color), 790px 178px var(--stars-color),
    1892px 1846px var(--stars-color), 1006px 1964px var(--stars-color),
    1651px 388px var(--stars-color), 1611px 1390px var(--stars-color),
    674px 1648px var(--stars-color), 1989px 777px var(--stars-color),
    939px 1536px var(--stars-color), 1745px 1401px var(--stars-color),
    880px 1774px var(--stars-color), 1086px 525px var(--stars-color),
    1429px 1582px var(--stars-color), 1611px 899px var(--stars-color),
    190px 1581px var(--stars-color), 97px 996px var(--stars-color),
    1751px 699px var(--stars-color), 870px 175px var(--stars-color),
    1826px 355px var(--stars-color), 928px 1909px var(--stars-color),
    863px 307px var(--stars-color), 877px 1629px var(--stars-color),
    1653px 224px var(--stars-color), 408px 608px var(--stars-color),
    434px 742px var(--stars-color), 739px 1327px var(--stars-color),
    565px 1203px var(--stars-color), 1697px 741px var(--stars-color),
    813px 495px var(--stars-color), 423px 1251px var(--stars-color),
    702px 1064px var(--stars-color), 1940px 1248px var(--stars-color),
    1822px 1955px var(--stars-color), 1487px 825px var(--stars-color),
    1765px 1059px var(--stars-color), 1124px 1249px var(--stars-color),
    604px 999px var(--stars-color), 652px 1829px var(--stars-color),
    190px 1822px var(--stars-color), 528px 1872px var(--stars-color),
    1471px 1772px var(--stars-color), 947px 918px var(--stars-color),
    1156px 1706px var(--stars-color), 740px 701px var(--stars-color),
    753px 1125px var(--stars-color), 741px 1168px var(--stars-color),
    1790px 1663px var(--stars-color), 1825px 1834px var(--stars-color),
    1679px 1289px var(--stars-color), 233px 1434px var(--stars-color),
    1031px 1013px var(--stars-color), 520px 1385px var(--stars-color),
    1723px 964px var(--stars-color), 1408px 1212px var(--stars-color),
    57px 627px var(--stars-color), 1974px 396px var(--stars-color),
    216px 148px var(--stars-color), 1835px 1138px var(--stars-color),
    834px 1467px var(--stars-color), 935px 1804px var(--stars-color),
    1709px 726px var(--stars-color), 654px 1644px var(--stars-color),
    300px 1786px var(--stars-color), 1630px 217px var(--stars-color),
    1828px 1717px var(--stars-color), 1673px 524px var(--stars-color),
    1629px 246px var(--stars-color), 913px 1577px var(--stars-color),
    673px 1425px var(--stars-color), 1441px 1986px var(--stars-color),
    1029px 1178px var(--stars-color), 120px 223px var(--stars-color),
    401px 928px var(--stars-color), 891px 409px var(--stars-color),
    1077px 1738px var(--stars-color), 1356px 1196px var(--stars-color),
    1772px 239px var(--stars-color), 279px 919px var(--stars-color),
    779px 1160px var(--stars-color), 903px 1784px var(--stars-color),
    1565px 1126px var(--stars-color), 1462px 429px var(--stars-color),
    505px 1394px var(--stars-color), 900px 848px var(--stars-color),
    167px 1907px var(--stars-color), 366px 598px var(--stars-color),
    1881px 743px var(--stars-color), 1472px 87px var(--stars-color),
    1920px 72px var(--stars-color), 524px 78px var(--stars-color),
    1580px 222px var(--stars-color), 1496px 1176px var(--stars-color),
    261px 765px var(--stars-color), 1867px 1544px var(--stars-color),
    1544px 1374px var(--stars-color), 1093px 132px var(--stars-color),
    549px 67px var(--stars-color), 102px 413px var(--stars-color),
    216px 1184px var(--stars-color), 732px 761px var(--stars-color),
    182px 744px var(--stars-color), 1769px 272px var(--stars-color),
    645px 1806px var(--stars-color), 169px 281px var(--stars-color),
    442px 451px var(--stars-color), 1878px 352px var(--stars-color),
    1494px 1454px var(--stars-color), 370px 359px var(--stars-color),
    1898px 1323px var(--stars-color), 190px 1309px var(--stars-color),
    554px 1644px var(--stars-color), 1474px 886px var(--stars-color),
    1100px 1177px var(--stars-color), 1253px 1295px var(--stars-color),
    389px 173px var(--stars-color), 665px 764px var(--stars-color),
    1673px 327px var(--stars-color), 985px 783px var(--stars-color),
    1114px 496px var(--stars-color), 380px 1225px var(--stars-color),
    438px 767px var(--stars-color), 800px 727px var(--stars-color),
    1004px 1499px var(--stars-color), 583px 1971px var(--stars-color),
    417px 1327px var(--stars-color), 183px 183px var(--stars-color),
    574px 1487px var(--stars-color), 246px 259px var(--stars-color),
    1834px 1693px var(--stars-color), 1319px 198px var(--stars-color),
    1322px 1126px var(--stars-color), 1464px 1396px var(--stars-color),
    1138px 1014px var(--stars-color), 1263px 1737px var(--stars-color),
    1920px 228px var(--stars-color), 251px 1717px var(--stars-color),
    1963px 806px var(--stars-color), 1300px 478px var(--stars-color),
    699px 267px var(--stars-color), 1563px 1623px var(--stars-color),
    1027px 731px var(--stars-color), 1785px 595px var(--stars-color),
    1549px 147px var(--stars-color), 876px 1378px var(--stars-color),
    1546px 1536px var(--stars-color), 408px 180px var(--stars-color),
    1568px 1297px var(--stars-color), 425px 1993px var(--stars-color),
    1801px 1516px var(--stars-color), 1292px 1608px var(--stars-color),
    1033px 498px var(--stars-color), 1178px 1990px var(--stars-color),
    1703px 1457px var(--stars-color), 806px 1974px var(--stars-color),
    276px 1514px var(--stars-color), 1039px 524px var(--stars-color),
    281px 868px var(--stars-color), 1236px 100px var(--stars-color),
    1827px 1004px var(--stars-color), 1490px 910px var(--stars-color),
    1184px 782px var(--stars-color), 316px 1951px var(--stars-color),
    374px 677px var(--stars-color), 5px 35px var(--stars-color),
    1336px 309px var(--stars-color), 215px 1448px var(--stars-color),
    1981px 1436px var(--stars-color), 1245px 1875px var(--stars-color),
    1191px 1612px var(--stars-color), 1516px 1911px var(--stars-color),
    796px 811px var(--stars-color), 520px 89px var(--stars-color),
    490px 1255px var(--stars-color), 1852px 1145px var(--stars-color),
    1087px 1619px var(--stars-color), 1562px 1617px var(--stars-color),
    1511px 1723px var(--stars-color), 1208px 604px var(--stars-color),
    501px 1734px var(--stars-color), 291px 1188px var(--stars-color),
    1772px 1149px var(--stars-color), 1084px 1970px var(--stars-color),
    347px 1534px var(--stars-color), 348px 916px var(--stars-color),
    835px 988px var(--stars-color), 1193px 1370px var(--stars-color),
    88px 356px var(--stars-color), 1794px 719px var(--stars-color),
    1921px 328px var(--stars-color), 547px 566px var(--stars-color),
    1075px 568px var(--stars-color), 269px 960px var(--stars-color),
    1540px 330px var(--stars-color), 533px 378px var(--stars-color),
    1725px 831px var(--stars-color), 1362px 1484px var(--stars-color),
    641px 1194px var(--stars-color), 1923px 1943px var(--stars-color),
    505px 1187px var(--stars-color), 395px 1285px var(--stars-color),
    848px 18px var(--stars-color), 1871px 200px var(--stars-color),
    1944px 62px var(--stars-color), 207px 562px var(--stars-color),
    1394px 1280px var(--stars-color), 205px 1300px var(--stars-color),
    1580px 270px var(--stars-color), 1725px 1815px var(--stars-color),
    1332px 562px var(--stars-color), 573px 955px var(--stars-color),
    446px 1471px var(--stars-color), 160px 860px var(--stars-color),
    1904px 805px var(--stars-color), 1963px 1310px var(--stars-color),
    1594px 1376px var(--stars-color), 124px 1371px var(--stars-color),
    1608px 1516px var(--stars-color), 223px 1603px var(--stars-color),
    1674px 397px var(--stars-color), 183px 474px var(--stars-color),
    611px 1510px var(--stars-color), 260px 1537px var(--stars-color),
    81px 40px var(--stars-color), 1271px 1540px var(--stars-color),
    818px 690px var(--stars-color), 1213px 1251px var(--stars-color),
    524px 1473px var(--stars-color), 1967px 123px var(--stars-color),
    318px 730px var(--stars-color), 306px 173px var(--stars-color),
    959px 528px var(--stars-color), 1246px 550px var(--stars-color),
    1563px 198px var(--stars-color), 575px 1766px var(--stars-color),
    1262px 596px var(--stars-color), 1144px 1164px var(--stars-color),
    299px 1765px var(--stars-color), 270px 683px var(--stars-color),
    1012px 1421px var(--stars-color), 1895px 941px var(--stars-color),
    1951px 534px var(--stars-color), 486px 1021px var(--stars-color),
    1808px 1423px var(--stars-color), 1254px 1310px var(--stars-color),
    845px 1487px var(--stars-color), 1739px 1420px var(--stars-color),
    1466px 1567px var(--stars-color), 1682px 1928px var(--stars-color),
    1417px 204px var(--stars-color), 1203px 1762px var(--stars-color),
    1246px 1851px var(--stars-color), 1658px 383px var(--stars-color),
    1408px 961px var(--stars-color), 583px 816px var(--stars-color),
    1472px 1308px var(--stars-color), 763px 282px var(--stars-color),
    1406px 1346px var(--stars-color), 180px 1966px var(--stars-color),
    1389px 447px var(--stars-color), 472px 664px var(--stars-color),
    767px 867px var(--stars-color), 584px 146px var(--stars-color),
    1135px 1572px var(--stars-color), 1060px 1106px var(--stars-color),
    566px 1711px var(--stars-color), 1889px 322px var(--stars-color),
    1668px 236px var(--stars-color), 1214px 416px var(--stars-color),
    187px 190px var(--stars-color), 754px 1282px var(--stars-color),
    1107px 401px var(--stars-color), 1433px 1736px var(--stars-color),
    1942px 797px var(--stars-color), 873px 1416px var(--stars-color),
    1241px 1542px var(--stars-color), 358px 1520px var(--stars-color),
    1198px 912px var(--stars-color), 1018px 1923px var(--stars-color),
    452px 979px var(--stars-color), 343px 1210px var(--stars-color),
    303px 627px var(--stars-color), 1574px 1459px var(--stars-color),
    1783px 639px var(--stars-color), 848px 1094px var(--stars-color),
    881px 1398px var(--stars-color), 270px 1931px var(--stars-color),
    1926px 1099px var(--stars-color), 771px 1906px var(--stars-color),
    1624px 1549px var(--stars-color), 1856px 190px var(--stars-color),
    1982px 464px var(--stars-color), 361px 1196px var(--stars-color),
    788px 455px var(--stars-color), 1467px 1743px var(--stars-color),
    857px 289px var(--stars-color), 1007px 1256px var(--stars-color),
    1144px 1203px var(--stars-color), 809px 85px var(--stars-color),
    1301px 1705px var(--stars-color), 1617px 791px var(--stars-color),
    1697px 60px var(--stars-color), 975px 520px var(--stars-color),
    1975px 1108px var(--stars-color), 1914px 1400px var(--stars-color),
    660px 492px var(--stars-color), 1997px 996px var(--stars-color),
    807px 395px var(--stars-color), 1443px 366px var(--stars-color),
    863px 314px var(--stars-color), 669px 106px var(--stars-color),
    921px 346px var(--stars-color), 1971px 763px var(--stars-color),
    1615px 992px var(--stars-color), 1897px 981px var(--stars-color),
    1752px 1448px var(--stars-color), 923px 223px var(--stars-color),
    1708px 1423px var(--stars-color), 839px 906px var(--stars-color),
    645px 1953px var(--stars-color), 964px 680px var(--stars-color),
    42px 1790px var(--stars-color), 1115px 1942px var(--stars-color),
    1694px 1067px var(--stars-color), 1940px 387px var(--stars-color),
    1218px 823px var(--stars-color), 1047px 1664px var(--stars-color),
    612px 1976px var(--stars-color), 1404px 882px var(--stars-color),
    366px 197px var(--stars-color), 1102px 1863px var(--stars-color),
    765px 1797px var(--stars-color), 75px 1783px var(--stars-color),
    74px 826px var(--stars-color), 1927px 238px var(--stars-color),
    601px 1967px var(--stars-color), 1542px 1629px var(--stars-color),
    658px 1374px var(--stars-color), 1932px 1712px var(--stars-color),
    1258px 523px var(--stars-color), 586px 687px var(--stars-color),
    768px 618px var(--stars-color), 766px 1607px var(--stars-color),
    1005px 1222px var(--stars-color), 463px 1365px var(--stars-color),
    305px 1835px var(--stars-color), 623px 1225px var(--stars-color),
    799px 438px var(--stars-color), 285px 1711px var(--stars-color),
    296px 554px var(--stars-color), 649px 1388px var(--stars-color),
    1351px 535px var(--stars-color), 1919px 292px var(--stars-color),
    1464px 912px var(--stars-color), 1307px 1369px var(--stars-color),
    241px 320px var(--stars-color), 227px 1584px var(--stars-color),
    1931px 147px var(--stars-color), 1018px 1617px var(--stars-color),
    904px 1630px var(--stars-color), 649px 1283px var(--stars-color),
    1025px 561px var(--stars-color), 1377px 1080px var(--stars-color),
    759px 1742px var(--stars-color), 1663px 1780px var(--stars-color),
    883px 1838px var(--stars-color), 1241px 1236px var(--stars-color),
    1787px 228px var(--stars-color), 378px 631px var(--stars-color),
    1145px 1306px var(--stars-color), 197px 271px var(--stars-color),
    1955px 1358px var(--stars-color), 1812px 543px var(--stars-color),
    913px 1027px var(--stars-color), 1027px 1136px var(--stars-color),
    756px 1485px var(--stars-color), 608px 152px var(--stars-color),
    1952px 1696px var(--stars-color), 422px 195px var(--stars-color),
    573px 1606px var(--stars-color), 545px 1288px var(--stars-color),
    447px 201px var(--stars-color), 1651px 678px var(--stars-color),
    1718px 1687px var(--stars-color), 910px 1909px var(--stars-color),
    686px 791px var(--stars-color), 369px 438px var(--stars-color),
    653px 1351px var(--stars-color), 1437px 115px var(--stars-color),
    77px 1551px var(--stars-color), 1373px 1989px var(--stars-color),
    1733px 1196px var(--stars-color), 1930px 339px var(--stars-color),
    795px 1739px var(--stars-color), 1928px 1714px var(--stars-color),
    1115px 209px var(--stars-color), 906px 175px var(--stars-color),
    1959px 837px var(--stars-color), 681px 97px var(--stars-color),
    896px 773px var(--stars-color), 1448px 113px var(--stars-color),
    587px 1443px var(--stars-color), 1606px 955px var(--stars-color),
    1080px 1372px var(--stars-color), 1236px 453px var(--stars-color),
    1900px 916px var(--stars-color), 980px 756px var(--stars-color),
    396px 727px var(--stars-color), 1747px 1203px var(--stars-color),
    1834px 955px var(--stars-color), 1684px 1909px var(--stars-color),
    320px 802px var(--stars-color), 854px 54px var(--stars-color),
    1516px 71px var(--stars-color), 527px 155px var(--stars-color),
    309px 1247px var(--stars-color), 919px 1014px var(--stars-color),
    588px 1584px var(--stars-color), 1007px 1208px var(--stars-color),
    1976px 1703px var(--stars-color), 1053px 1847px var(--stars-color),
    416px 196px var(--stars-color), 290px 921px var(--stars-color),
    1255px 811px var(--stars-color), 1062px 1340px var(--stars-color),
    1384px 1413px var(--stars-color), 381px 835px var(--stars-color),
    106px 1994px var(--stars-color), 752px 1062px var(--stars-color),
    1590px 1360px var(--stars-color), 659px 694px var(--stars-color),
    1245px 629px var(--stars-color), 802px 858px var(--stars-color),
    597px 293px var(--stars-color), 449px 17px var(--stars-color),
    1220px 299px var(--stars-color), 1454px 1751px var(--stars-color),
    630px 1534px var(--stars-color), 1049px 1756px var(--stars-color),
    697px 1011px var(--stars-color), 833px 1656px var(--stars-color),
    363px 1517px var(--stars-color), 1109px 1343px var(--stars-color),
    1358px 1957px var(--stars-color), 755px 229px var(--stars-color),
    1940px 1649px var(--stars-color), 1709px 643px var(--stars-color),
    721px 955px var(--stars-color), 77px 864px var(--stars-color),
    669px 190px var(--stars-color), 1000px 869px var(--stars-color),
    1237px 778px var(--stars-color), 1984px 1094px var(--stars-color),
    1159px 1616px var(--stars-color), 883px 1566px var(--stars-color),
    1256px 599px var(--stars-color), 1806px 1232px var(--stars-color),
    1257px 1775px var(--stars-color), 402px 586px var(--stars-color),
    1145px 321px var(--stars-color), 1914px 704px var(--stars-color),
    3px 444px var(--stars-color), 1866px 1463px var(--stars-color),
    1719px 260px var(--stars-color), 200px 229px var(--stars-color),
    1847px 69px var(--stars-color), 412px 1578px var(--stars-color),
    1941px 1013px var(--stars-color), 1717px 1356px var(--stars-color),
    23px 1723px var(--stars-color), 1787px 1115px var(--stars-color),
    763px 744px var(--stars-color), 1028px 1386px var(--stars-color),
    1041px 1460px var(--stars-color), 785px 147px var(--stars-color),
    1520px 8px var(--stars-color), 1589px 300px var(--stars-color),
    105px 1488px var(--stars-color), 499px 256px var(--stars-color),
    947px 652px var(--stars-color), 1173px 1884px var(--stars-color),
    524px 854px var(--stars-color), 138px 269px var(--stars-color),
    1566px 1172px var(--stars-color), 136px 1965px var(--stars-color),
    1815px 1326px var(--stars-color), 992px 1px var(--stars-color),
    1045px 771px var(--stars-color), 1720px 1999px var(--stars-color),
    304px 258px var(--stars-color), 1249px 981px var(--stars-color),
    1283px 1671px var(--stars-color), 1540px 1406px var(--stars-color);
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 10px 1221px var(--stars-color), 1399px 1279px var(--stars-color),
    655px 554px var(--stars-color), 1523px 262px var(--stars-color),
    1011px 725px var(--stars-color), 421px 1925px var(--stars-color),
    42px 1121px var(--stars-color), 1577px 460px var(--stars-color),
    350px 1374px var(--stars-color), 692px 50px var(--stars-color),
    1919px 1671px var(--stars-color), 1341px 1205px var(--stars-color),
    1174px 1799px var(--stars-color), 158px 623px var(--stars-color),
    1013px 118px var(--stars-color), 786px 906px var(--stars-color),
    1702px 1787px var(--stars-color), 1770px 1382px var(--stars-color),
    883px 1031px var(--stars-color), 993px 672px var(--stars-color),
    1955px 1596px var(--stars-color), 1492px 1463px var(--stars-color),
    170px 1550px var(--stars-color), 1668px 1584px var(--stars-color),
    1127px 1688px var(--stars-color), 1330px 123px var(--stars-color),
    1937px 1414px var(--stars-color), 593px 1032px var(--stars-color),
    1784px 754px var(--stars-color), 467px 588px var(--stars-color),
    72px 777px var(--stars-color), 1067px 994px var(--stars-color),
    1573px 648px var(--stars-color), 1343px 462px var(--stars-color),
    1864px 354px var(--stars-color), 1736px 1334px var(--stars-color),
    872px 884px var(--stars-color), 451px 228px var(--stars-color),
    434px 729px var(--stars-color), 1587px 1133px var(--stars-color),
    1328px 750px var(--stars-color), 1779px 1963px var(--stars-color),
    723px 161px var(--stars-color), 408px 316px var(--stars-color),
    877px 1020px var(--stars-color), 437px 1223px var(--stars-color),
    509px 628px var(--stars-color), 1759px 514px var(--stars-color),
    619px 1803px var(--stars-color), 1227px 727px var(--stars-color),
    561px 1401px var(--stars-color), 278px 1754px var(--stars-color),
    741px 1044px var(--stars-color), 80px 1181px var(--stars-color),
    248px 1530px var(--stars-color), 1985px 1699px var(--stars-color),
    945px 318px var(--stars-color), 1758px 347px var(--stars-color),
    1225px 1534px var(--stars-color), 993px 1731px var(--stars-color),
    676px 1672px var(--stars-color), 27px 1px var(--stars-color),
    1524px 1908px var(--stars-color), 848px 1539px var(--stars-color),
    1048px 761px var(--stars-color), 14px 1591px var(--stars-color),
    1939px 169px var(--stars-color), 1685px 312px var(--stars-color),
    199px 139px var(--stars-color), 1541px 1803px var(--stars-color),
    1510px 505px var(--stars-color), 1293px 650px var(--stars-color),
    944px 126px var(--stars-color), 1685px 1660px var(--stars-color),
    1730px 885px var(--stars-color), 962px 280px var(--stars-color),
    1474px 780px var(--stars-color), 1456px 1879px var(--stars-color),
    1061px 980px var(--stars-color), 494px 355px var(--stars-color),
    401px 318px var(--stars-color), 1644px 1865px var(--stars-color),
    542px 1261px var(--stars-color), 1673px 782px var(--stars-color),
    1160px 1430px var(--stars-color), 520px 251px var(--stars-color),
    1612px 1069px var(--stars-color), 1300px 1622px var(--stars-color),
    1793px 983px var(--stars-color), 1298px 1351px var(--stars-color),
    1188px 649px var(--stars-color), 229px 1119px var(--stars-color),
    884px 931px var(--stars-color), 1000px 1427px var(--stars-color),
    328px 1248px var(--stars-color), 936px 817px var(--stars-color),
    341px 86px var(--stars-color), 623px 491px var(--stars-color),
    1882px 18px var(--stars-color), 1617px 1806px var(--stars-color),
    715px 460px var(--stars-color), 1040px 802px var(--stars-color),
    1505px 66px var(--stars-color), 89px 739px var(--stars-color),
    611px 146px var(--stars-color), 1375px 1595px var(--stars-color),
    1356px 1480px var(--stars-color), 287px 446px var(--stars-color),
    1088px 1517px var(--stars-color), 19px 1904px var(--stars-color),
    407px 1517px var(--stars-color), 1954px 1292px var(--stars-color),
    955px 476px var(--stars-color), 423px 1599px var(--stars-color),
    843px 1581px var(--stars-color), 341px 891px var(--stars-color),
    521px 1328px var(--stars-color), 561px 879px var(--stars-color),
    1126px 216px var(--stars-color), 1389px 1780px var(--stars-color),
    100px 1063px var(--stars-color), 214px 1679px var(--stars-color),
    881px 3px var(--stars-color), 587px 1024px var(--stars-color),
    1552px 883px var(--stars-color), 1346px 1186px var(--stars-color),
    299px 1680px var(--stars-color), 1229px 1850px var(--stars-color),
    1340px 1607px var(--stars-color), 386px 704px var(--stars-color),
    1176px 35px var(--stars-color), 1981px 392px var(--stars-color),
    1545px 95px var(--stars-color), 1472px 720px var(--stars-color),
    940px 1257px var(--stars-color), 1672px 1009px var(--stars-color),
    1386px 144px var(--stars-color), 538px 660px var(--stars-color),
    530px 1241px var(--stars-color), 863px 1190px var(--stars-color),
    345px 400px var(--stars-color), 866px 351px var(--stars-color),
    191px 158px var(--stars-color), 904px 774px var(--stars-color),
    2px 1293px var(--stars-color), 1269px 1553px var(--stars-color),
    518px 1989px var(--stars-color), 297px 87px var(--stars-color),
    1455px 1677px var(--stars-color), 939px 1910px var(--stars-color),
    1570px 1065px var(--stars-color), 1964px 453px var(--stars-color),
    762px 844px var(--stars-color), 1843px 1415px var(--stars-color),
    232px 114px var(--stars-color), 1435px 1051px var(--stars-color),
    570px 1044px var(--stars-color), 690px 1221px var(--stars-color),
    434px 850px var(--stars-color), 808px 1330px var(--stars-color),
    1333px 1410px var(--stars-color), 196px 877px var(--stars-color),
    1939px 730px var(--stars-color), 1089px 302px var(--stars-color),
    721px 1561px var(--stars-color), 1696px 1951px var(--stars-color),
    61px 1585px var(--stars-color), 382px 1563px var(--stars-color),
    1580px 1382px var(--stars-color), 1372px 1951px var(--stars-color),
    1231px 971px var(--stars-color), 1599px 351px var(--stars-color),
    901px 733px var(--stars-color), 1514px 1633px var(--stars-color),
    815px 1380px var(--stars-color), 1609px 1725px var(--stars-color),
    1441px 377px var(--stars-color), 1821px 1368px var(--stars-color),
    1548px 557px var(--stars-color), 429px 937px var(--stars-color),
    722px 1568px var(--stars-color), 1829px 954px var(--stars-color),
    1265px 739px var(--stars-color), 295px 1922px var(--stars-color),
    264px 1250px var(--stars-color), 1196px 655px var(--stars-color),
    290px 5px var(--stars-color), 1681px 669px var(--stars-color),
    1752px 434px var(--stars-color), 451px 1512px var(--stars-color),
    641px 466px var(--stars-color), 834px 1320px var(--stars-color),
    1932px 1363px var(--stars-color), 267px 793px var(--stars-color),
    1307px 234px var(--stars-color), 310px 281px var(--stars-color),
    795px 151px var(--stars-color), 358px 425px var(--stars-color),
    1059px 1263px var(--stars-color), 1582px 576px var(--stars-color),
    148px 223px var(--stars-color), 936px 1025px var(--stars-color),
    548px 1217px var(--stars-color), 1984px 272px var(--stars-color),
    595px 563px var(--stars-color), 756px 279px var(--stars-color),
    1372px 421px var(--stars-color), 1094px 157px var(--stars-color),
    1428px 1911px var(--stars-color), 790px 178px var(--stars-color),
    1892px 1846px var(--stars-color), 1006px 1964px var(--stars-color),
    1651px 388px var(--stars-color), 1611px 1390px var(--stars-color),
    674px 1648px var(--stars-color), 1989px 777px var(--stars-color),
    939px 1536px var(--stars-color), 1745px 1401px var(--stars-color),
    880px 1774px var(--stars-color), 1086px 525px var(--stars-color),
    1429px 1582px var(--stars-color), 1611px 899px var(--stars-color),
    190px 1581px var(--stars-color), 97px 996px var(--stars-color),
    1751px 699px var(--stars-color), 870px 175px var(--stars-color),
    1826px 355px var(--stars-color), 928px 1909px var(--stars-color),
    863px 307px var(--stars-color), 877px 1629px var(--stars-color),
    1653px 224px var(--stars-color), 408px 608px var(--stars-color),
    434px 742px var(--stars-color), 739px 1327px var(--stars-color),
    565px 1203px var(--stars-color), 1697px 741px var(--stars-color),
    813px 495px var(--stars-color), 423px 1251px var(--stars-color),
    702px 1064px var(--stars-color), 1940px 1248px var(--stars-color),
    1822px 1955px var(--stars-color), 1487px 825px var(--stars-color),
    1765px 1059px var(--stars-color), 1124px 1249px var(--stars-color),
    604px 999px var(--stars-color), 652px 1829px var(--stars-color),
    190px 1822px var(--stars-color), 528px 1872px var(--stars-color),
    1471px 1772px var(--stars-color), 947px 918px var(--stars-color),
    1156px 1706px var(--stars-color), 740px 701px var(--stars-color),
    753px 1125px var(--stars-color), 741px 1168px var(--stars-color),
    1790px 1663px var(--stars-color), 1825px 1834px var(--stars-color),
    1679px 1289px var(--stars-color), 233px 1434px var(--stars-color),
    1031px 1013px var(--stars-color), 520px 1385px var(--stars-color),
    1723px 964px var(--stars-color), 1408px 1212px var(--stars-color),
    57px 627px var(--stars-color), 1974px 396px var(--stars-color),
    216px 148px var(--stars-color), 1835px 1138px var(--stars-color),
    834px 1467px var(--stars-color), 935px 1804px var(--stars-color),
    1709px 726px var(--stars-color), 654px 1644px var(--stars-color),
    300px 1786px var(--stars-color), 1630px 217px var(--stars-color),
    1828px 1717px var(--stars-color), 1673px 524px var(--stars-color),
    1629px 246px var(--stars-color), 913px 1577px var(--stars-color),
    673px 1425px var(--stars-color), 1441px 1986px var(--stars-color),
    1029px 1178px var(--stars-color), 120px 223px var(--stars-color),
    401px 928px var(--stars-color), 891px 409px var(--stars-color),
    1077px 1738px var(--stars-color), 1356px 1196px var(--stars-color),
    1772px 239px var(--stars-color), 279px 919px var(--stars-color),
    779px 1160px var(--stars-color), 903px 1784px var(--stars-color),
    1565px 1126px var(--stars-color), 1462px 429px var(--stars-color),
    505px 1394px var(--stars-color), 900px 848px var(--stars-color),
    167px 1907px var(--stars-color), 366px 598px var(--stars-color),
    1881px 743px var(--stars-color), 1472px 87px var(--stars-color),
    1920px 72px var(--stars-color), 524px 78px var(--stars-color),
    1580px 222px var(--stars-color), 1496px 1176px var(--stars-color),
    261px 765px var(--stars-color), 1867px 1544px var(--stars-color),
    1544px 1374px var(--stars-color), 1093px 132px var(--stars-color),
    549px 67px var(--stars-color), 102px 413px var(--stars-color),
    216px 1184px var(--stars-color), 732px 761px var(--stars-color),
    182px 744px var(--stars-color), 1769px 272px var(--stars-color),
    645px 1806px var(--stars-color), 169px 281px var(--stars-color),
    442px 451px var(--stars-color), 1878px 352px var(--stars-color),
    1494px 1454px var(--stars-color), 370px 359px var(--stars-color),
    1898px 1323px var(--stars-color), 190px 1309px var(--stars-color),
    554px 1644px var(--stars-color), 1474px 886px var(--stars-color),
    1100px 1177px var(--stars-color), 1253px 1295px var(--stars-color),
    389px 173px var(--stars-color), 665px 764px var(--stars-color),
    1673px 327px var(--stars-color), 985px 783px var(--stars-color),
    1114px 496px var(--stars-color), 380px 1225px var(--stars-color),
    438px 767px var(--stars-color), 800px 727px var(--stars-color),
    1004px 1499px var(--stars-color), 583px 1971px var(--stars-color),
    417px 1327px var(--stars-color), 183px 183px var(--stars-color),
    574px 1487px var(--stars-color), 246px 259px var(--stars-color),
    1834px 1693px var(--stars-color), 1319px 198px var(--stars-color),
    1322px 1126px var(--stars-color), 1464px 1396px var(--stars-color),
    1138px 1014px var(--stars-color), 1263px 1737px var(--stars-color),
    1920px 228px var(--stars-color), 251px 1717px var(--stars-color),
    1963px 806px var(--stars-color), 1300px 478px var(--stars-color),
    699px 267px var(--stars-color), 1563px 1623px var(--stars-color),
    1027px 731px var(--stars-color), 1785px 595px var(--stars-color),
    1549px 147px var(--stars-color), 876px 1378px var(--stars-color),
    1546px 1536px var(--stars-color), 408px 180px var(--stars-color),
    1568px 1297px var(--stars-color), 425px 1993px var(--stars-color),
    1801px 1516px var(--stars-color), 1292px 1608px var(--stars-color),
    1033px 498px var(--stars-color), 1178px 1990px var(--stars-color),
    1703px 1457px var(--stars-color), 806px 1974px var(--stars-color),
    276px 1514px var(--stars-color), 1039px 524px var(--stars-color),
    281px 868px var(--stars-color), 1236px 100px var(--stars-color),
    1827px 1004px var(--stars-color), 1490px 910px var(--stars-color),
    1184px 782px var(--stars-color), 316px 1951px var(--stars-color),
    374px 677px var(--stars-color), 5px 35px var(--stars-color),
    1336px 309px var(--stars-color), 215px 1448px var(--stars-color),
    1981px 1436px var(--stars-color), 1245px 1875px var(--stars-color),
    1191px 1612px var(--stars-color), 1516px 1911px var(--stars-color),
    796px 811px var(--stars-color), 520px 89px var(--stars-color),
    490px 1255px var(--stars-color), 1852px 1145px var(--stars-color),
    1087px 1619px var(--stars-color), 1562px 1617px var(--stars-color),
    1511px 1723px var(--stars-color), 1208px 604px var(--stars-color),
    501px 1734px var(--stars-color), 291px 1188px var(--stars-color),
    1772px 1149px var(--stars-color), 1084px 1970px var(--stars-color),
    347px 1534px var(--stars-color), 348px 916px var(--stars-color),
    835px 988px var(--stars-color), 1193px 1370px var(--stars-color),
    88px 356px var(--stars-color), 1794px 719px var(--stars-color),
    1921px 328px var(--stars-color), 547px 566px var(--stars-color),
    1075px 568px var(--stars-color), 269px 960px var(--stars-color),
    1540px 330px var(--stars-color), 533px 378px var(--stars-color),
    1725px 831px var(--stars-color), 1362px 1484px var(--stars-color),
    641px 1194px var(--stars-color), 1923px 1943px var(--stars-color),
    505px 1187px var(--stars-color), 395px 1285px var(--stars-color),
    848px 18px var(--stars-color), 1871px 200px var(--stars-color),
    1944px 62px var(--stars-color), 207px 562px var(--stars-color),
    1394px 1280px var(--stars-color), 205px 1300px var(--stars-color),
    1580px 270px var(--stars-color), 1725px 1815px var(--stars-color),
    1332px 562px var(--stars-color), 573px 955px var(--stars-color),
    446px 1471px var(--stars-color), 160px 860px var(--stars-color),
    1904px 805px var(--stars-color), 1963px 1310px var(--stars-color),
    1594px 1376px var(--stars-color), 124px 1371px var(--stars-color),
    1608px 1516px var(--stars-color), 223px 1603px var(--stars-color),
    1674px 397px var(--stars-color), 183px 474px var(--stars-color),
    611px 1510px var(--stars-color), 260px 1537px var(--stars-color),
    81px 40px var(--stars-color), 1271px 1540px var(--stars-color),
    818px 690px var(--stars-color), 1213px 1251px var(--stars-color),
    524px 1473px var(--stars-color), 1967px 123px var(--stars-color),
    318px 730px var(--stars-color), 306px 173px var(--stars-color),
    959px 528px var(--stars-color), 1246px 550px var(--stars-color),
    1563px 198px var(--stars-color), 575px 1766px var(--stars-color),
    1262px 596px var(--stars-color), 1144px 1164px var(--stars-color),
    299px 1765px var(--stars-color), 270px 683px var(--stars-color),
    1012px 1421px var(--stars-color), 1895px 941px var(--stars-color),
    1951px 534px var(--stars-color), 486px 1021px var(--stars-color),
    1808px 1423px var(--stars-color), 1254px 1310px var(--stars-color),
    845px 1487px var(--stars-color), 1739px 1420px var(--stars-color),
    1466px 1567px var(--stars-color), 1682px 1928px var(--stars-color),
    1417px 204px var(--stars-color), 1203px 1762px var(--stars-color),
    1246px 1851px var(--stars-color), 1658px 383px var(--stars-color),
    1408px 961px var(--stars-color), 583px 816px var(--stars-color),
    1472px 1308px var(--stars-color), 763px 282px var(--stars-color),
    1406px 1346px var(--stars-color), 180px 1966px var(--stars-color),
    1389px 447px var(--stars-color), 472px 664px var(--stars-color),
    767px 867px var(--stars-color), 584px 146px var(--stars-color),
    1135px 1572px var(--stars-color), 1060px 1106px var(--stars-color),
    566px 1711px var(--stars-color), 1889px 322px var(--stars-color),
    1668px 236px var(--stars-color), 1214px 416px var(--stars-color),
    187px 190px var(--stars-color), 754px 1282px var(--stars-color),
    1107px 401px var(--stars-color), 1433px 1736px var(--stars-color),
    1942px 797px var(--stars-color), 873px 1416px var(--stars-color),
    1241px 1542px var(--stars-color), 358px 1520px var(--stars-color),
    1198px 912px var(--stars-color), 1018px 1923px var(--stars-color),
    452px 979px var(--stars-color), 343px 1210px var(--stars-color),
    303px 627px var(--stars-color), 1574px 1459px var(--stars-color),
    1783px 639px var(--stars-color), 848px 1094px var(--stars-color),
    881px 1398px var(--stars-color), 270px 1931px var(--stars-color),
    1926px 1099px var(--stars-color), 771px 1906px var(--stars-color),
    1624px 1549px var(--stars-color), 1856px 190px var(--stars-color),
    1982px 464px var(--stars-color), 361px 1196px var(--stars-color),
    788px 455px var(--stars-color), 1467px 1743px var(--stars-color),
    857px 289px var(--stars-color), 1007px 1256px var(--stars-color),
    1144px 1203px var(--stars-color), 809px 85px var(--stars-color),
    1301px 1705px var(--stars-color), 1617px 791px var(--stars-color),
    1697px 60px var(--stars-color), 975px 520px var(--stars-color),
    1975px 1108px var(--stars-color), 1914px 1400px var(--stars-color),
    660px 492px var(--stars-color), 1997px 996px var(--stars-color),
    807px 395px var(--stars-color), 1443px 366px var(--stars-color),
    863px 314px var(--stars-color), 669px 106px var(--stars-color),
    921px 346px var(--stars-color), 1971px 763px var(--stars-color),
    1615px 992px var(--stars-color), 1897px 981px var(--stars-color),
    1752px 1448px var(--stars-color), 923px 223px var(--stars-color),
    1708px 1423px var(--stars-color), 839px 906px var(--stars-color),
    645px 1953px var(--stars-color), 964px 680px var(--stars-color),
    42px 1790px var(--stars-color), 1115px 1942px var(--stars-color),
    1694px 1067px var(--stars-color), 1940px 387px var(--stars-color),
    1218px 823px var(--stars-color), 1047px 1664px var(--stars-color),
    612px 1976px var(--stars-color), 1404px 882px var(--stars-color),
    366px 197px var(--stars-color), 1102px 1863px var(--stars-color),
    765px 1797px var(--stars-color), 75px 1783px var(--stars-color),
    74px 826px var(--stars-color), 1927px 238px var(--stars-color),
    601px 1967px var(--stars-color), 1542px 1629px var(--stars-color),
    658px 1374px var(--stars-color), 1932px 1712px var(--stars-color),
    1258px 523px var(--stars-color), 586px 687px var(--stars-color),
    768px 618px var(--stars-color), 766px 1607px var(--stars-color),
    1005px 1222px var(--stars-color), 463px 1365px var(--stars-color),
    305px 1835px var(--stars-color), 623px 1225px var(--stars-color),
    799px 438px var(--stars-color), 285px 1711px var(--stars-color),
    296px 554px var(--stars-color), 649px 1388px var(--stars-color),
    1351px 535px var(--stars-color), 1919px 292px var(--stars-color),
    1464px 912px var(--stars-color), 1307px 1369px var(--stars-color),
    241px 320px var(--stars-color), 227px 1584px var(--stars-color),
    1931px 147px var(--stars-color), 1018px 1617px var(--stars-color),
    904px 1630px var(--stars-color), 649px 1283px var(--stars-color),
    1025px 561px var(--stars-color), 1377px 1080px var(--stars-color),
    759px 1742px var(--stars-color), 1663px 1780px var(--stars-color),
    883px 1838px var(--stars-color), 1241px 1236px var(--stars-color),
    1787px 228px var(--stars-color), 378px 631px var(--stars-color),
    1145px 1306px var(--stars-color), 197px 271px var(--stars-color),
    1955px 1358px var(--stars-color), 1812px 543px var(--stars-color),
    913px 1027px var(--stars-color), 1027px 1136px var(--stars-color),
    756px 1485px var(--stars-color), 608px 152px var(--stars-color),
    1952px 1696px var(--stars-color), 422px 195px var(--stars-color),
    573px 1606px var(--stars-color), 545px 1288px var(--stars-color),
    447px 201px var(--stars-color), 1651px 678px var(--stars-color),
    1718px 1687px var(--stars-color), 910px 1909px var(--stars-color),
    686px 791px var(--stars-color), 369px 438px var(--stars-color),
    653px 1351px var(--stars-color), 1437px 115px var(--stars-color),
    77px 1551px var(--stars-color), 1373px 1989px var(--stars-color),
    1733px 1196px var(--stars-color), 1930px 339px var(--stars-color),
    795px 1739px var(--stars-color), 1928px 1714px var(--stars-color),
    1115px 209px var(--stars-color), 906px 175px var(--stars-color),
    1959px 837px var(--stars-color), 681px 97px var(--stars-color),
    896px 773px var(--stars-color), 1448px 113px var(--stars-color),
    587px 1443px var(--stars-color), 1606px 955px var(--stars-color),
    1080px 1372px var(--stars-color), 1236px 453px var(--stars-color),
    1900px 916px var(--stars-color), 980px 756px var(--stars-color),
    396px 727px var(--stars-color), 1747px 1203px var(--stars-color),
    1834px 955px var(--stars-color), 1684px 1909px var(--stars-color),
    320px 802px var(--stars-color), 854px 54px var(--stars-color),
    1516px 71px var(--stars-color), 527px 155px var(--stars-color),
    309px 1247px var(--stars-color), 919px 1014px var(--stars-color),
    588px 1584px var(--stars-color), 1007px 1208px var(--stars-color),
    1976px 1703px var(--stars-color), 1053px 1847px var(--stars-color),
    416px 196px var(--stars-color), 290px 921px var(--stars-color),
    1255px 811px var(--stars-color), 1062px 1340px var(--stars-color),
    1384px 1413px var(--stars-color), 381px 835px var(--stars-color),
    106px 1994px var(--stars-color), 752px 1062px var(--stars-color),
    1590px 1360px var(--stars-color), 659px 694px var(--stars-color),
    1245px 629px var(--stars-color), 802px 858px var(--stars-color),
    597px 293px var(--stars-color), 449px 17px var(--stars-color),
    1220px 299px var(--stars-color), 1454px 1751px var(--stars-color),
    630px 1534px var(--stars-color), 1049px 1756px var(--stars-color),
    697px 1011px var(--stars-color), 833px 1656px var(--stars-color),
    363px 1517px var(--stars-color), 1109px 1343px var(--stars-color),
    1358px 1957px var(--stars-color), 755px 229px var(--stars-color),
    1940px 1649px var(--stars-color), 1709px 643px var(--stars-color),
    721px 955px var(--stars-color), 77px 864px var(--stars-color),
    669px 190px var(--stars-color), 1000px 869px var(--stars-color),
    1237px 778px var(--stars-color), 1984px 1094px var(--stars-color),
    1159px 1616px var(--stars-color), 883px 1566px var(--stars-color),
    1256px 599px var(--stars-color), 1806px 1232px var(--stars-color),
    1257px 1775px var(--stars-color), 402px 586px var(--stars-color),
    1145px 321px var(--stars-color), 1914px 704px var(--stars-color),
    3px 444px var(--stars-color), 1866px 1463px var(--stars-color),
    1719px 260px var(--stars-color), 200px 229px var(--stars-color),
    1847px 69px var(--stars-color), 412px 1578px var(--stars-color),
    1941px 1013px var(--stars-color), 1717px 1356px var(--stars-color),
    23px 1723px var(--stars-color), 1787px 1115px var(--stars-color),
    763px 744px var(--stars-color), 1028px 1386px var(--stars-color),
    1041px 1460px var(--stars-color), 785px 147px var(--stars-color),
    1520px 8px var(--stars-color), 1589px 300px var(--stars-color),
    105px 1488px var(--stars-color), 499px 256px var(--stars-color),
    947px 652px var(--stars-color), 1173px 1884px var(--stars-color),
    524px 854px var(--stars-color), 138px 269px var(--stars-color),
    1566px 1172px var(--stars-color), 136px 1965px var(--stars-color),
    1815px 1326px var(--stars-color), 992px 1px var(--stars-color),
    1045px 771px var(--stars-color), 1720px 1999px var(--stars-color),
    304px 258px var(--stars-color), 1249px 981px var(--stars-color),
    1283px 1671px var(--stars-color), 1540px 1406px var(--stars-color);
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 704px 345px var(--stars-color), 107px 1997px var(--stars-color),
    1610px 1234px var(--stars-color), 1331px 710px var(--stars-color),
    443px 601px var(--stars-color), 50px 794px var(--stars-color),
    1085px 1731px var(--stars-color), 864px 389px var(--stars-color),
    1910px 70px var(--stars-color), 1827px 1362px var(--stars-color),
    961px 1146px var(--stars-color), 99px 314px var(--stars-color),
    683px 1047px var(--stars-color), 898px 1757px var(--stars-color),
    1307px 1791px var(--stars-color), 211px 1272px var(--stars-color),
    1586px 406px var(--stars-color), 1568px 1488px var(--stars-color),
    217px 974px var(--stars-color), 1683px 1800px var(--stars-color),
    1082px 523px var(--stars-color), 901px 507px var(--stars-color),
    1596px 1517px var(--stars-color), 1965px 1708px var(--stars-color),
    435px 1105px var(--stars-color), 966px 932px var(--stars-color),
    852px 750px var(--stars-color), 1230px 937px var(--stars-color),
    1393px 1800px var(--stars-color), 192px 673px var(--stars-color),
    575px 1583px var(--stars-color), 436px 1731px var(--stars-color),
    201px 1143px var(--stars-color), 1900px 1193px var(--stars-color),
    1527px 608px var(--stars-color), 1269px 1344px var(--stars-color),
    1792px 703px var(--stars-color), 1520px 550px var(--stars-color),
    402px 1402px var(--stars-color), 1982px 1201px var(--stars-color),
    1999px 1006px var(--stars-color), 251px 1112px var(--stars-color),
    502px 1116px var(--stars-color), 928px 552px var(--stars-color),
    543px 1413px var(--stars-color), 200px 1874px var(--stars-color),
    250px 55px var(--stars-color), 514px 723px var(--stars-color),
    1510px 1379px var(--stars-color), 1327px 952px var(--stars-color),
    481px 612px var(--stars-color), 299px 59px var(--stars-color),
    1748px 988px var(--stars-color), 392px 1178px var(--stars-color),
    1055px 672px var(--stars-color), 1701px 1265px var(--stars-color),
    208px 355px var(--stars-color), 972px 1057px var(--stars-color),
    1184px 731px var(--stars-color), 1450px 1510px var(--stars-color),
    1627px 1976px var(--stars-color), 1510px 158px var(--stars-color),
    317px 713px var(--stars-color), 196px 545px var(--stars-color),
    1124px 1093px var(--stars-color), 1152px 334px var(--stars-color),
    865px 511px var(--stars-color), 670px 219px var(--stars-color),
    847px 726px var(--stars-color), 1620px 1534px var(--stars-color),
    1779px 535px var(--stars-color), 457px 1782px var(--stars-color),
    1652px 443px var(--stars-color), 489px 1090px var(--stars-color),
    253px 1485px var(--stars-color), 95px 1357px var(--stars-color),
    969px 1140px var(--stars-color), 675px 525px var(--stars-color),
    1764px 206px var(--stars-color), 930px 347px var(--stars-color),
    1344px 342px var(--stars-color), 550px 407px var(--stars-color),
    475px 102px var(--stars-color), 761px 1962px var(--stars-color),
    1397px 502px var(--stars-color), 1046px 491px var(--stars-color),
    1433px 523px var(--stars-color), 9px 1209px var(--stars-color),
    504px 1621px var(--stars-color), 215px 1498px var(--stars-color),
    547px 1221px var(--stars-color), 266px 1720px var(--stars-color),
    217px 825px var(--stars-color), 66px 60px var(--stars-color),
    263px 443px var(--stars-color), 1471px 897px var(--stars-color),
    781px 1040px var(--stars-color), 962px 224px var(--stars-color),
    1155px 1966px var(--stars-color), 507px 1430px var(--stars-color),
    87px 111px var(--stars-color), 1175px 54px var(--stars-color),
    708px 636px var(--stars-color), 1699px 50px var(--stars-color),
    810px 1962px var(--stars-color), 591px 1675px var(--stars-color),
    1546px 545px var(--stars-color), 1331px 1399px var(--stars-color),
    546px 653px var(--stars-color), 1916px 181px var(--stars-color),
    1022px 1489px var(--stars-color), 884px 1672px var(--stars-color),
    1194px 208px var(--stars-color), 428px 71px var(--stars-color),
    953px 677px var(--stars-color), 1429px 1555px var(--stars-color),
    1185px 556px var(--stars-color), 1766px 404px var(--stars-color),
    149px 1989px var(--stars-color), 1201px 546px var(--stars-color),
    1068px 1016px var(--stars-color), 1208px 1554px var(--stars-color),
    912px 58px var(--stars-color), 565px 1035px var(--stars-color),
    1686px 1813px var(--stars-color), 541px 462px var(--stars-color),
    26px 1970px var(--stars-color), 630px 636px var(--stars-color),
    1689px 1271px var(--stars-color), 360px 777px var(--stars-color),
    1666px 297px var(--stars-color), 703px 1301px var(--stars-color),
    138px 942px var(--stars-color), 1003px 1008px var(--stars-color),
    1325px 1489px var(--stars-color), 224px 879px var(--stars-color),
    544px 1577px var(--stars-color), 867px 1706px var(--stars-color),
    1293px 515px var(--stars-color), 143px 807px var(--stars-color),
    498px 1872px var(--stars-color), 1430px 352px var(--stars-color),
    328px 1564px var(--stars-color), 1659px 1313px var(--stars-color),
    1088px 645px var(--stars-color), 1820px 528px var(--stars-color),
    58px 1204px var(--stars-color), 1915px 1949px var(--stars-color),
    956px 499px var(--stars-color), 736px 1228px var(--stars-color),
    65px 1012px var(--stars-color), 842px 1883px var(--stars-color),
    1618px 382px var(--stars-color), 954px 76px var(--stars-color),
    1256px 1491px var(--stars-color), 210px 1838px var(--stars-color),
    476px 113px var(--stars-color), 1956px 464px var(--stars-color),
    690px 1743px var(--stars-color), 259px 1635px var(--stars-color),
    1507px 19px var(--stars-color), 1155px 927px var(--stars-color),
    1177px 158px var(--stars-color), 993px 282px var(--stars-color),
    1398px 1969px var(--stars-color), 1568px 183px var(--stars-color),
    900px 1527px var(--stars-color), 794px 1837px var(--stars-color),
    1489px 1643px var(--stars-color), 1282px 13px var(--stars-color),
    389px 1948px var(--stars-color), 887px 297px var(--stars-color),
    1015px 1512px var(--stars-color), 694px 285px var(--stars-color),
    1705px 332px var(--stars-color), 1923px 1171px var(--stars-color),
    489px 1849px var(--stars-color), 1357px 796px var(--stars-color),
    1944px 1559px var(--stars-color), 1457px 522px var(--stars-color),
    1073px 1779px var(--stars-color), 484px 193px var(--stars-color),
    948px 1374px var(--stars-color), 607px 757px var(--stars-color),
    172px 27px var(--stars-color), 1494px 874px var(--stars-color),
    1614px 387px var(--stars-color), 454px 548px var(--stars-color),
    287px 883px var(--stars-color), 279px 387px var(--stars-color),
    154px 1671px var(--stars-color), 1186px 320px var(--stars-color),
    1115px 1824px var(--stars-color), 1147px 480px var(--stars-color),
    813px 259px var(--stars-color), 1266px 997px var(--stars-color),
    654px 398px var(--stars-color), 258px 705px var(--stars-color),
    1249px 1874px var(--stars-color), 181px 1138px var(--stars-color);
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 704px 345px var(--stars-color), 107px 1997px var(--stars-color),
    1610px 1234px var(--stars-color), 1331px 710px var(--stars-color),
    443px 601px var(--stars-color), 50px 794px var(--stars-color),
    1085px 1731px var(--stars-color), 864px 389px var(--stars-color),
    1910px 70px var(--stars-color), 1827px 1362px var(--stars-color),
    961px 1146px var(--stars-color), 99px 314px var(--stars-color),
    683px 1047px var(--stars-color), 898px 1757px var(--stars-color),
    1307px 1791px var(--stars-color), 211px 1272px var(--stars-color),
    1586px 406px var(--stars-color), 1568px 1488px var(--stars-color),
    217px 974px var(--stars-color), 1683px 1800px var(--stars-color),
    1082px 523px var(--stars-color), 901px 507px var(--stars-color),
    1596px 1517px var(--stars-color), 1965px 1708px var(--stars-color),
    435px 1105px var(--stars-color), 966px 932px var(--stars-color),
    852px 750px var(--stars-color), 1230px 937px var(--stars-color),
    1393px 1800px var(--stars-color), 192px 673px var(--stars-color),
    575px 1583px var(--stars-color), 436px 1731px var(--stars-color),
    201px 1143px var(--stars-color), 1900px 1193px var(--stars-color),
    1527px 608px var(--stars-color), 1269px 1344px var(--stars-color),
    1792px 703px var(--stars-color), 1520px 550px var(--stars-color),
    402px 1402px var(--stars-color), 1982px 1201px var(--stars-color),
    1999px 1006px var(--stars-color), 251px 1112px var(--stars-color),
    502px 1116px var(--stars-color), 928px 552px var(--stars-color),
    543px 1413px var(--stars-color), 200px 1874px var(--stars-color),
    250px 55px var(--stars-color), 514px 723px var(--stars-color),
    1510px 1379px var(--stars-color), 1327px 952px var(--stars-color),
    481px 612px var(--stars-color), 299px 59px var(--stars-color),
    1748px 988px var(--stars-color), 392px 1178px var(--stars-color),
    1055px 672px var(--stars-color), 1701px 1265px var(--stars-color),
    208px 355px var(--stars-color), 972px 1057px var(--stars-color),
    1184px 731px var(--stars-color), 1450px 1510px var(--stars-color),
    1627px 1976px var(--stars-color), 1510px 158px var(--stars-color),
    317px 713px var(--stars-color), 196px 545px var(--stars-color),
    1124px 1093px var(--stars-color), 1152px 334px var(--stars-color),
    865px 511px var(--stars-color), 670px 219px var(--stars-color),
    847px 726px var(--stars-color), 1620px 1534px var(--stars-color),
    1779px 535px var(--stars-color), 457px 1782px var(--stars-color),
    1652px 443px var(--stars-color), 489px 1090px var(--stars-color),
    253px 1485px var(--stars-color), 95px 1357px var(--stars-color),
    969px 1140px var(--stars-color), 675px 525px var(--stars-color),
    1764px 206px var(--stars-color), 930px 347px var(--stars-color),
    1344px 342px var(--stars-color), 550px 407px var(--stars-color),
    475px 102px var(--stars-color), 761px 1962px var(--stars-color),
    1397px 502px var(--stars-color), 1046px 491px var(--stars-color),
    1433px 523px var(--stars-color), 9px 1209px var(--stars-color),
    504px 1621px var(--stars-color), 215px 1498px var(--stars-color),
    547px 1221px var(--stars-color), 266px 1720px var(--stars-color),
    217px 825px var(--stars-color), 66px 60px var(--stars-color),
    263px 443px var(--stars-color), 1471px 897px var(--stars-color),
    781px 1040px var(--stars-color), 962px 224px var(--stars-color),
    1155px 1966px var(--stars-color), 507px 1430px var(--stars-color),
    87px 111px var(--stars-color), 1175px 54px var(--stars-color),
    708px 636px var(--stars-color), 1699px 50px var(--stars-color),
    810px 1962px var(--stars-color), 591px 1675px var(--stars-color),
    1546px 545px var(--stars-color), 1331px 1399px var(--stars-color),
    546px 653px var(--stars-color), 1916px 181px var(--stars-color),
    1022px 1489px var(--stars-color), 884px 1672px var(--stars-color),
    1194px 208px var(--stars-color), 428px 71px var(--stars-color),
    953px 677px var(--stars-color), 1429px 1555px var(--stars-color),
    1185px 556px var(--stars-color), 1766px 404px var(--stars-color),
    149px 1989px var(--stars-color), 1201px 546px var(--stars-color),
    1068px 1016px var(--stars-color), 1208px 1554px var(--stars-color),
    912px 58px var(--stars-color), 565px 1035px var(--stars-color),
    1686px 1813px var(--stars-color), 541px 462px var(--stars-color),
    26px 1970px var(--stars-color), 630px 636px var(--stars-color),
    1689px 1271px var(--stars-color), 360px 777px var(--stars-color),
    1666px 297px var(--stars-color), 703px 1301px var(--stars-color),
    138px 942px var(--stars-color), 1003px 1008px var(--stars-color),
    1325px 1489px var(--stars-color), 224px 879px var(--stars-color),
    544px 1577px var(--stars-color), 867px 1706px var(--stars-color),
    1293px 515px var(--stars-color), 143px 807px var(--stars-color),
    498px 1872px var(--stars-color), 1430px 352px var(--stars-color),
    328px 1564px var(--stars-color), 1659px 1313px var(--stars-color),
    1088px 645px var(--stars-color), 1820px 528px var(--stars-color),
    58px 1204px var(--stars-color), 1915px 1949px var(--stars-color),
    956px 499px var(--stars-color), 736px 1228px var(--stars-color),
    65px 1012px var(--stars-color), 842px 1883px var(--stars-color),
    1618px 382px var(--stars-color), 954px 76px var(--stars-color),
    1256px 1491px var(--stars-color), 210px 1838px var(--stars-color),
    476px 113px var(--stars-color), 1956px 464px var(--stars-color),
    690px 1743px var(--stars-color), 259px 1635px var(--stars-color),
    1507px 19px var(--stars-color), 1155px 927px var(--stars-color),
    1177px 158px var(--stars-color), 993px 282px var(--stars-color),
    1398px 1969px var(--stars-color), 1568px 183px var(--stars-color),
    900px 1527px var(--stars-color), 794px 1837px var(--stars-color),
    1489px 1643px var(--stars-color), 1282px 13px var(--stars-color),
    389px 1948px var(--stars-color), 887px 297px var(--stars-color),
    1015px 1512px var(--stars-color), 694px 285px var(--stars-color),
    1705px 332px var(--stars-color), 1923px 1171px var(--stars-color),
    489px 1849px var(--stars-color), 1357px 796px var(--stars-color),
    1944px 1559px var(--stars-color), 1457px 522px var(--stars-color),
    1073px 1779px var(--stars-color), 484px 193px var(--stars-color),
    948px 1374px var(--stars-color), 607px 757px var(--stars-color),
    172px 27px var(--stars-color), 1494px 874px var(--stars-color),
    1614px 387px var(--stars-color), 454px 548px var(--stars-color),
    287px 883px var(--stars-color), 279px 387px var(--stars-color),
    154px 1671px var(--stars-color), 1186px 320px var(--stars-color),
    1115px 1824px var(--stars-color), 1147px 480px var(--stars-color),
    813px 259px var(--stars-color), 1266px 997px var(--stars-color),
    654px 398px var(--stars-color), 258px 705px var(--stars-color),
    1249px 1874px var(--stars-color), 181px 1138px var(--stars-color);
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 13px 724px var(--stars-color), 648px 653px var(--stars-color),
    1103px 245px var(--stars-color), 1987px 662px var(--stars-color),
    1515px 1950px var(--stars-color), 1221px 918px var(--stars-color),
    932px 1976px var(--stars-color), 1743px 605px var(--stars-color),
    1168px 536px var(--stars-color), 1717px 983px var(--stars-color),
    106px 1105px var(--stars-color), 951px 572px var(--stars-color),
    1187px 1082px var(--stars-color), 1655px 978px var(--stars-color),
    1263px 554px var(--stars-color), 685px 470px var(--stars-color),
    1110px 1996px var(--stars-color), 110px 97px var(--stars-color),
    1537px 501px var(--stars-color), 43px 1567px var(--stars-color),
    1132px 1288px var(--stars-color), 1040px 785px var(--stars-color),
    619px 959px var(--stars-color), 1298px 640px var(--stars-color),
    188px 562px var(--stars-color), 543px 791px var(--stars-color),
    242px 1346px var(--stars-color), 357px 1734px var(--stars-color),
    826px 93px var(--stars-color), 556px 1028px var(--stars-color),
    1292px 1696px var(--stars-color), 1499px 1925px var(--stars-color),
    132px 1416px var(--stars-color), 1547px 1918px var(--stars-color),
    1515px 1534px var(--stars-color), 716px 1675px var(--stars-color),
    1084px 1956px var(--stars-color), 1577px 1212px var(--stars-color),
    146px 805px var(--stars-color), 1101px 269px var(--stars-color),
    15px 872px var(--stars-color), 1732px 812px var(--stars-color),
    1270px 19px var(--stars-color), 922px 1927px var(--stars-color),
    462px 1721px var(--stars-color), 1754px 579px var(--stars-color),
    1102px 1739px var(--stars-color), 102px 1333px var(--stars-color),
    361px 1479px var(--stars-color), 13px 292px var(--stars-color),
    1324px 1084px var(--stars-color), 853px 224px var(--stars-color),
    68px 850px var(--stars-color), 697px 512px var(--stars-color),
    1873px 1182px var(--stars-color), 8px 1083px var(--stars-color),
    559px 861px var(--stars-color), 750px 61px var(--stars-color),
    415px 1029px var(--stars-color), 1240px 1695px var(--stars-color),
    1438px 306px var(--stars-color), 1998px 193px var(--stars-color),
    328px 1471px var(--stars-color), 1078px 1864px var(--stars-color),
    1097px 1105px var(--stars-color), 272px 1267px var(--stars-color),
    617px 678px var(--stars-color), 561px 1232px var(--stars-color),
    873px 739px var(--stars-color), 639px 1619px var(--stars-color),
    53px 795px var(--stars-color), 1824px 1590px var(--stars-color),
    378px 1735px var(--stars-color), 417px 1788px var(--stars-color),
    1726px 813px var(--stars-color), 1863px 518px var(--stars-color),
    1272px 297px var(--stars-color), 103px 1617px var(--stars-color),
    1235px 1878px var(--stars-color), 382px 178px var(--stars-color),
    1857px 1330px var(--stars-color), 1187px 1912px var(--stars-color),
    393px 319px var(--stars-color), 706px 139px var(--stars-color),
    1510px 512px var(--stars-color), 839px 1116px var(--stars-color),
    1581px 1499px var(--stars-color), 1320px 519px var(--stars-color),
    1337px 1983px var(--stars-color), 1592px 1674px var(--stars-color),
    1619px 785px var(--stars-color), 1696px 415px var(--stars-color),
    1814px 1132px var(--stars-color), 1116px 1158px var(--stars-color),
    1359px 1960px var(--stars-color), 1787px 983px var(--stars-color),
    809px 1889px var(--stars-color), 1098px 1997px var(--stars-color),
    1673px 326px var(--stars-color), 331px 978px var(--stars-color);
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 13px 724px var(--stars-color), 648px 653px var(--stars-color),
    1103px 245px var(--stars-color), 1987px 662px var(--stars-color),
    1515px 1950px var(--stars-color), 1221px 918px var(--stars-color),
    932px 1976px var(--stars-color), 1743px 605px var(--stars-color),
    1168px 536px var(--stars-color), 1717px 983px var(--stars-color),
    106px 1105px var(--stars-color), 951px 572px var(--stars-color),
    1187px 1082px var(--stars-color), 1655px 978px var(--stars-color),
    1263px 554px var(--stars-color), 685px 470px var(--stars-color),
    1110px 1996px var(--stars-color), 110px 97px var(--stars-color),
    1537px 501px var(--stars-color), 43px 1567px var(--stars-color),
    1132px 1288px var(--stars-color), 1040px 785px var(--stars-color),
    619px 959px var(--stars-color), 1298px 640px var(--stars-color),
    188px 562px var(--stars-color), 543px 791px var(--stars-color),
    242px 1346px var(--stars-color), 357px 1734px var(--stars-color),
    826px 93px var(--stars-color), 556px 1028px var(--stars-color),
    1292px 1696px var(--stars-color), 1499px 1925px var(--stars-color),
    132px 1416px var(--stars-color), 1547px 1918px var(--stars-color),
    1515px 1534px var(--stars-color), 716px 1675px var(--stars-color),
    1084px 1956px var(--stars-color), 1577px 1212px var(--stars-color),
    146px 805px var(--stars-color), 1101px 269px var(--stars-color),
    15px 872px var(--stars-color), 1732px 812px var(--stars-color),
    1270px 19px var(--stars-color), 922px 1927px var(--stars-color),
    462px 1721px var(--stars-color), 1754px 579px var(--stars-color),
    1102px 1739px var(--stars-color), 102px 1333px var(--stars-color),
    361px 1479px var(--stars-color), 13px 292px var(--stars-color),
    1324px 1084px var(--stars-color), 853px 224px var(--stars-color),
    68px 850px var(--stars-color), 697px 512px var(--stars-color),
    1873px 1182px var(--stars-color), 8px 1083px var(--stars-color),
    559px 861px var(--stars-color), 750px 61px var(--stars-color),
    415px 1029px var(--stars-color), 1240px 1695px var(--stars-color),
    1438px 306px var(--stars-color), 1998px 193px var(--stars-color),
    328px 1471px var(--stars-color), 1078px 1864px var(--stars-color),
    1097px 1105px var(--stars-color), 272px 1267px var(--stars-color),
    617px 678px var(--stars-color), 561px 1232px var(--stars-color),
    873px 739px var(--stars-color), 639px 1619px var(--stars-color),
    53px 795px var(--stars-color), 1824px 1590px var(--stars-color),
    378px 1735px var(--stars-color), 417px 1788px var(--stars-color),
    1726px 813px var(--stars-color), 1863px 518px var(--stars-color),
    1272px 297px var(--stars-color), 103px 1617px var(--stars-color),
    1235px 1878px var(--stars-color), 382px 178px var(--stars-color),
    1857px 1330px var(--stars-color), 1187px 1912px var(--stars-color),
    393px 319px var(--stars-color), 706px 139px var(--stars-color),
    1510px 512px var(--stars-color), 839px 1116px var(--stars-color),
    1581px 1499px var(--stars-color), 1320px 519px var(--stars-color),
    1337px 1983px var(--stars-color), 1592px 1674px var(--stars-color),
    1619px 785px var(--stars-color), 1696px 415px var(--stars-color),
    1814px 1132px var(--stars-color), 1116px 1158px var(--stars-color),
    1359px 1960px var(--stars-color), 1787px 983px var(--stars-color),
    809px 1889px var(--stars-color), 1098px 1997px var(--stars-color),
    1673px 326px var(--stars-color), 331px 978px var(--stars-color);
}

#title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
}
#title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

.accent {
  font-family: 'Saira Semi Condensed';
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a:link {
  color: #0c1192;
}

.news,
.blog-slug {
  a.button {
    background: rgb(71, 42, 214);
    background: linear-gradient(
      133deg,
      rgb(71, 42, 214) 0%,
      rgba(231, 43, 178, 1) 100%
    );
    box-shadow: 0px 4px 12px rgba(71, 42, 214, 0.468);
  }

  a.button:hover {
    box-shadow: 0px 5px 18px rgba(71, 42, 214, 0.8);
  }
}

.services {
  a.button {
    background: rgb(223, 153, 31);
    background: linear-gradient(
      133deg,
      rgb(223, 153, 31) 0%,
      rgba(231, 43, 178, 1) 100%
    );
    box-shadow: 0px 4px 12px rgba(223, 153, 31, 0.468);
  }

  a.button:hover {
    box-shadow: 0px 5px 18px rgba(223, 153, 31, 0.8);
  }
}

.contact {
  a.button,
  button {
    background: rgb(223, 153, 31);
    background: linear-gradient(
      133deg,
      rgb(223, 153, 31) 0%,
      rgb(196, 190, 23) 100%
    );
    box-shadow: 0px 4px 12px rgba(223, 153, 31, 0.468);
  }

  a.button:hover,
  button:hover {
    box-shadow: 0px 5px 18px rgba(223, 153, 31, 0.8);
  }

  button,
  button:hover {
    padding: 0.6rem;
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    text-transform: uppercase;
    color: #fff;
    font-size: 1.7rem;
    margin: 0 auto;
    display: block;
  }
}

a.button,
button {
  display: inline-block;
  border-radius: 50rem;
  font-size: 1.1rem;
  background: rgb(42, 139, 214);
  background: linear-gradient(
    133deg,
    rgba(42, 139, 214, 1) 0%,
    rgb(200, 43, 231) 100%
  );

  margin-left: 1rem;
  color: #fff;
  text-decoration: none;
  padding: 0.6rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  box-shadow: 0px 4px 12px rgba(19, 137, 240, 0.468);
  transition: 0.4s;
}

a.button:hover,
button:hover {
  transform: translateY(-2px);

  box-shadow: 0px 5px 18px rgba(19, 137, 240, 0.8);
}

.darkmode {
  h1,
  h2,
  h3 {
    color: #fff;
  }

  p {
    color: rgb(164, 164, 164);
  }
}

.homeHeader {
  will-change: height;
  transition: 0.3s;
}

.frontpage .homeHeader {
  height: 600px;
}

@media screen and (max-width: 600px) {
  .frontpage .homeHeader {
    height: 400px;
  }
}

.homeHeader {
  height: 140px;
}

.contentWidth {
  min-height: 1000px;
}

.contentWidth {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 4rem;
  padding-right: 4rem;
}

@media screen and (max-width: 600px) {
  .contentWidth {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: var(--stars-color);
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: var(--stars-color);
  background-color: #35495e;
}

.frontpage .headerBg .blueSash .text {
  opacity: 1;
}

.headerBg {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: -1;
  width: 75%;
  max-width: 1300px;
  overflow: hidden;

  .vertical-centered-box {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .vertical-centered-box:after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
  .vertical-centered-box .content {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    font-size: 0;
  }

  #particles-background,
  #particles-foreground {
    left: -51%;
    top: -51%;
    width: 202%;
    height: 202%;
    -webkit-transform: scale3d(0.5, 0.5, 1);
    -moz-transform: scale3d(0.5, 0.5, 1);
    -ms-transform: scale3d(0.5, 0.5, 1);
    -o-transform: scale3d(0.5, 0.5, 1);
    transform: scale3d(0.5, 0.5, 1);
  }

  .blueSash {
    .text {
      position: absolute;
      top: 30%;
      left: 20%;
      z-index: 2;
      max-width: 40%;
      font-size: 2.5rem;
      opacity: 0;
      transition: 0.4s opacity;
      color: #fff;
      text-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
    }

    .graphic svg {
      width: 100%;
      height: 100%;
    }

    .graphic svg * {
      transition: 0.4s;
    }
  }
}

@media screen and (max-width: 1000px) {
  .headerBg {
    .blueSash {
      .text {
        font-size: 2rem;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .headerBg {
    .blueSash {
      .text {
        display: none;
      }
    }
  }
}

.wp-block-group {
  background: var(--stars-color);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.13);
  border-radius: 0.4rem;
  margin-bottom: 2rem;
}
</style>
