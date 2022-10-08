import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">  <image id="image0" width="100" height="100" x="0" y="0"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA
                CXBIWXMAAA7DAAAOwwHHb6hkAAAXhElEQVR42u2deZRV1ZX/P/u+uV7NI1RRzBaDIKCCokHjEMWo
                IGk1GmPaTjpJa9qOCJjJDj9NrySmQU3sdLfNT7s1SatRA4gY2pnQghMgoMxUQRU1F1Wv6tXwhnvv
                7j9qsEZ41PQA/a5Va9U979x9ztnfe8/Z55y97xFOVdy03O0INV0uBrNBp4vKeIUMBBfQAtosEFSk
                XNB9ILuB3VHLv5+XH2iOd/X7C4l3BbrDfe2ys9Sh/6ZCusDMk66jqq1CIch7qP2BiuywDHazemVV
                vNsWC+JHyHXfSXCSMhvDniHIWSqaI0g26LkgSYNenlKLsAPYp7YWY0gtYn9irnn4f+Omg14QR0Lu
                zXQZxu8RvQLEOeTlqW5B5F1VXSRIMuiTitwIbDLVtYx1v6iMmy46YVgJcX9l2Vl2VK/EYDbKhSJM
                GbbCVW3gYRX5K4FxKJsV9gh8FTAV+37TU/LvPD9VWQ488IA9nLppx/AQsmhJtsuWe0C/D5IQuxLZ
                iuiUk7rn+PJaFAIijOzj9wBoAoil6HzzpZV/GRb9dMKQE+JaeN90Vft+EW4+mfsULUOlUdCJiBjD
                rZi2WmwQSxcbDppCax8uGY4Sh46Qa3+Y5nREfinI38ZPoYMBbVCVPwvkK/qjoX5rhoAQFdeCZbcj
                /ArIGcrKxwOKPm2GI3ez4bGGoZA/qIS4Fyy50YafiMjMYdFOnKCqexxO67rwnx4tHGzZg9aVuG5Y
                cp7C35/pZLRZa0m26XjXef3Siwdb/GAQIo7rly7EllcRuXT4NTTMaB8PRV/E4DnHDUsXDqZ4x0AF
                OBfc+31DZBVCYpxUNBwIA+2T1yYRyUSZpsJjonzBUXCx396/eedgFNT/MeTGxT5n1LFKVK9D8A/L
                bPvUQFhht8AsAIX1ovqirdRb61b+aaDC+0WId+G9+ZYaq1U0C9gkyG3x1tJwQtGdosZGRO9uvaZI
                bf1bUYLmeYlbBzLLP+kuy7loyWzbdlyloiUGcpkgs+OtoOGGIDkIzYo2C5ItkCbINSIy06iI7LH3
                bSntv+yTgHvhvTcoxhMoKcjAx5/TH6ognXSoJioNhsGc8JoVh/ojMXYra/7dyarG/UD652S0Q7o9
                0OJESLdsfYG/Xu7tj8SYCXF6XH+NcF68VXA6QERmOgONv+3PvTE96a5Fy84V5dnPkCU1YAgyyzHp
                Ird9zryt7H4nHOt9J35D5t/tUdt+GqRfr+BnGsKPnWHr8ZO55YSEOD2e+wQ5O95tO10hoje7rr8v
                Zv0dlxDvV5aMEeVH8W7U6Q0RDOvOWHMflxDT5OcIvng36bSG6jGUc7l0eUzjb5+EuBcsmSrIV+Pd
                ntMdipQBv3EkBy+LJX+fhNjw88/nGwOHCNOBu0RkGgA33XXcRdheZ+qOhfdebWBsiHdjziSoUqKG
                ftdQuTq6dsU9feXrScily73O1KZdAhPj3YgzDkotaKJDdGJfThM9uixHcnCeKGPiXfczBAq813El
                pCscNdXu09egx8hviDG2zaH5jIaIkJPiZ2RqIlkp/l7zNIYilBxroKw2iGX3a0VdQKd064jciPML
                wIe93dCVkBu+l4GtwVPQB7tX5KYncc7oHLJT/Pg9LtxOZ4/lPgCXw4HP7SQ5wUNWsp/8jGQm5KST
                4IntuTNtm7rGFhpDEVoiJmHTImpaRC2LqGkTMS0ilkU4ahKOWpiWjYjg97hwOY3k9w6U8vhrrfoX
                kVGo3gw82ltZXat/03I3LeVOl5FUjEhGvBXeHYleN3ML8rlqxgQuO3scY7JS4l2lmGDbyq2/foE3
                Py5qTVBaopFwGhse67HG1eUNcUUbp2MkP4QQExmTcjO5fNo4zp+Qy5isVNxOo6MCoahJZX0Te45W
                MyI1kUumjqUm2ExhZS2BphAigtflxO9x4XO78LqcuJwGToeB2+lAEFxOAxHB7XDgcTkYkZqIwzj9
                fO4MQ3hu8U3sLzvGE29u48m3tvucHu8cEzYdlxAspmFwRW9C0xN9fOfK85je1kXkpSeTlXxil9sv
                zzqr4//8jGRmjR0Rb/3EDQW5GcyfNZEn39qOoNdwPELanNx8nfswEZg+OofF185l/qyJOE/Dp/NU
                w+Ovto4lqlwP/Lj77636v2pxutPr2AmYguYbhtH4vflzkr939Rwykj5fyhpMnLP03yivCwIQNa1R
                rH+ky/67E8DlcYxCyAPITU/64Jl/uHH61PzseNf9jMS540ayvo0Qh8OYaUEXQgyAqFMr2hPu+OKs
                2VPzsz/fjBoi/OddC7n23AIADGQ+i5Zks2BZbvvvrYPC6pVVqNYDmJbNqte3xrveZyxEhIaWVmtX
                0euIqu3G6vAR7hilVaQU4Fdr3+FnL27EtjXedT8joaoUjGydVYjIWIch/2CLkd7+u9EpZ6T9X7fT
                yeKnNlDX2DJsFY2YVpc/HabnwbTsHmW3/w0FPi6pYsNHBzuuDbgLmNt+3Wke8unMfOqoTH54wzzS
                EofHwrrjt2tYv21/l7TJeZlsevCbg15WRaCRVW9s5Y1dRRyqrCUUMfvMe8vF03jsm18e1PKf2/zJ
                sdJj9bsRmQeASIbAIub/aBkbflHdSshNP0iRsJnXbgVfOX0CI9OGz5m93QzsjKPHBj9A6f2DpXzt
                1y9Q3xybV07pINehqKqO1e/vTqH7hFx1O0kHa6Gty3JFIqM7xwG2RKKDrox4w7Rs7lz1csxkDAUy
                kxI4f3yeE+HCzumKjCQ4Ih3azd5A8h4bWdQWHcTY7NT4aW6I8P7BUopr6k/upkFa9K5rbOGDQ6W8
                vfsIk/MyEem6Ji1CgcPtmQHtr87GB0xr0T3vGZZTMxJ9zJ6QF2/9DToOVBzrNV2AsdlpeF09nUIu
                njR6QGU+884uVq7bwpHqwAnzitICnfoyb9TjshyWwzCEHz/zOlNHZZOXnsTcgnymjsqKpy4HBX1Z
                Tf/v5su46+qhiaj43z3FMZGBEjVD+hF0IsRymlmoUN3QzBu7inhjVxE5KX7+J/8Ql509jg8PlVIZ
                aKQpEuW8cbl849IZnDPm9I96npyXOWSyQ1EzpnwqWshrK5ugEyG2aqrRrdOsrG+isr6It9o2VmaM
                yeHHi+bxpXMmDL/mTjMcKK/tYcr3BUHymX93Fhseq+4gxIEk9DYXKxiZwSVTx5Dk9XDT3KmcNfLk
                NhJf2XaAF97djfKp9Cumjefrl5wTb50NKZ7a+BFWjKsdqhzF6VLoOjF0d884dVQWzy2+iRGp/Z+T
                rP1wL+u27uuSVlHXeMYTkp3sjzmvQCa+kjrovJaF3cXMSEnwsnrZLQMioy98FlbJLiwYxRXTx3NR
                QT4O4wT2s+D3RMbnQ6c3RJGM9tschsHPv3YF6cO0dHImYs7EPJ6950YAWiImxTUBCqsCrN+6n+c2
                f9wlrw0PRdc+dBg6ESI2JkarXf7oHfO5eW7XkIZAU4i3PzlMTbCZ/Ixkrp7Zf8fGpnDkuNfDiaFY
                oukOn9vJpNxMJuVmku739SDEwN7dbpR/SgjUKOB1u0hP9LGruIoxWSn8z0cHWfPBXj44WMaYrBTu
                vGo2X5oRu5Vl9OIotbe0htsf+xNjs1Mprq5nX1nPSVss3iVf/82LfHCorOPa63Lyzj99i0Rvj+Gw
                14kfwA/+8Br/9fZHeF3d/cqFhbMn8d0vnT+o5PzdqnVdExRLDGfHVyA+7bLUOAzKjDE52Kr85pV3
                qQ4289BtV7Lg/El4XP0LL8zuwyuw8xJ0b4hl7CquaaC22xZBYyjSKyETctJ7lWFaNruKe//cotft
                GDRC9pTWsGnPEXJSEru9lfpIxCUdT1XrY3jj4vRobv0uIPzugaN847E/YRjCv37rWiblZvabDIBL
                pvTPTfjyaeMGRRHtmDMxj9GZJ+lYN4jWx39v2slPnnmDrYVlXX8QudPTHO6YSzgBvLaRFKpOTVCs
                wxmJCZPW3HcrUwZpBnv59PFcd14BL2+NbZIEMC47jXuuvTDm/LHA6TD4129fx62PPE8wNLAxqyUS
                7XD0g9ZlmeZwlMZQhPrmEJX1TZTVBtlVXMnm/SWU1zVS3xzqQ5pGwuenHGZ9Wz0BQtMTS9y7mifY
                KntyUvyT3M7Bi9MRYNV3F/DEm9tY9ca2467tpPq93Dz3bJZcf1FMFl6ir2vX5HY68Ln79te9YGIe
                m372Tf79tQ/ZuPsIRVV1x92gyk1P7jX9hXd3c7CilqxkP03hCC1hs8Pj8khNgMZQhAXnT2bRBVP4
                m8tm4XM7sWxl7v3/v8fWuMLrnb+N0mXE/cmTax7ccbj8Hy+bNp55U0bjcjjYW1rNi+/twety8i/f
                +jKBphDvHjjKjDE5jEw7+e8dF1XVUVhZR02wmXDUwukwSPN7yc9MYXJe5kk546kqUetTr3SHYZzY
                5u8G07Kx+9gvHsiDeaC8ltXv72FfWQ0VgUaipsX2wxU9Mwq3R9es+H2vhFSWlz5g2fz0tt+8SGFl
                HV63kwsmjuLKc8Yzf+bELhVUVZojUfweN58lqCp1TSGaw1FCUZNw1KQ5YlLfFKKoqo4t+4+y40hF
                bHsvSjRqOXNY/8u69qQuo/XHxVUf/27TLjbvL+HWi6fz6B3zAbBVqW5oZuuhMuZNGU1DS5gD5bWc
                MyYHvyfeKhpefPvxdaz9YO+gyFL0tc5kQDdCrljx7KvOsHlUREY1h6Nc+4s/dPSVl04dw19dOJUk
                n4ckn4e8PvrXUxUR0+LlbftZ9fpWjh5rYM2yW5gwIp1Ne44wL0ZL8Jl3dvH6zk8/8pOe6CPV76Ww
                slWnbqeD2y+Zweb9Jew5Wh2DRCnvntLVnm2yfOKSF4Hvby8qZ9a4kfzslss5d9xIVJWKQCP7ymoI
                NIWoa3tFHYZBbloS151XEG+d94lVb2zjn196h7rGFlL9XkZnpvDGx0VkJvt5ZfsBmsJRkn0eZk/M
                xeXoe9zYc7SGq2dOJDMpgfREHzXBZvaVHWPiiHQm52Zyxxdnkp+ZwuKnNsRGiNhPHpcQp1smAe+h
                SnmgkbFNLaxct5lAU4i9pTUdHnfd8cvbroy3znvF/rJj7C2rYfO+Yi6ZMob6phBh0+JgRS1PvLmN
                w1UBdh6p5OPiKlL9XtL885jSaXf06Y07OFwdIBw1O3y1DBEqAo2UHGtgRGoiC2dPZmJOGpnJCWQk
                JfDT597iD5tO/PlFRfeZax/efFxCvnLh1HBuin9VWW0D9c1hopZNUyiCrYohwvicNNL8PiaOSMfl
                NEhwu0hO8HBNpxiQUwGPvLyFP275hMzkBAKNIdISfdhqc83MsxidlcqEnDTyM1NIcLuOa5WNzU4l
                alkk+zx8crSaEV432Sl+MpMSCDSHKBiZgdMwmJqfTVFVHZc/+BSHKmpjqqMgz/ee3gne634w2nJY
                R7pkECElwcO0/GyykhNI8/vITE4gyechalqcOz6Xiyflx5uDXqGqdHPwIBQ1qW5oYseRSrTNWJk9
                IY8peZnsOFJBwcgM/F53r2twnWHaNihUNzTxh027ePSVdwl32rIVEbRP90tVw3YVhNf9ssf6UZc3
                JOQ7r9QVfi8EfHTRpNEXFuRmsPT6i8gZgj2RgcCybQorAxQfqyfZ66Ym2Izf6yYrqTWiS4FgS5jS
                2iDBUIRthWVUBBo5Uh2gsLKuy4qItOX3uByEo61rrj63i8l5mTgMITctiaZwlJZwlJpgc8cyUlFV
                HVHL6rinM9ITfXzv6jm8+UkR7+wt7oUO/twbGT0I4fmbLRYs3Qy6sykcSfri2WPPHi530uPBbjMo
                theVU1hZx/pt+9laWD4gmR6Xg3S/j4LcTGaOHcHBilqCLWGO1raGQW8vOjn5qX4vl08bx9e+MJ2z
                87N56u2P2NZXHYU+lwd6vJeu6++9VQ15QIQVqDyemZzA3IJ8MpMSOvrbqGWz80glX551FueMyeH3
                m3ZywcQ8vG4XcybmMiUvdrehcNSitrEF07bbwogdFFfXc6Q6wLHGZoqqAvzuLzsINHVdC3IYwtis
                NMblpOJ1OXE7HDgcn87U2689Lgc+l4skn5v0RB+2KoLQGI5QXd9EQ0uYUNREEBI8LhK9blISPPjc
                LhQlFDFxGAa2Kj63E5fDgdNhYIjgcTlI87eavk3hCMU19byxq4jXdhyi+bjen/Yt0bUPPxcTIaDi
                XLjsOyAZl0zJ/3ZOSuLYYEukw0mhPSo2weMiLdFLoseNiNAcjlIeCFJyrIGWSJSclERmjR1Bdmoi
                6X4vLoeDxnCE8rogRVUBPjxURtg0KalpOGFQfrtBce64kZw7PpeUBA9ltUHKA0HKaoPUNYUIR00s
                W0nwuHAaQkvUbI0ht1oX/mobWwi2xM+N9FP1sjkq0WtZ++tAjIS0wrlwyRq/192Yn558m9/jxufu
                FrDbFvqswNisFJyGg6n5WYzJTOHs/GzqGlv46HAFpXVB6ptCHKmpR1U5FmzG6TBI8nlI8/sYn5NG
                fkYyOSmJ5KT6UYVgKIIhkOBxYYiBqlJyrJ4PD5Xx2s5CiqrqOF2hsMxcu2JFX7/3SYh7wbKbVPSP
                /S04JcHL1FFZTM7LZEJOGikJrVFylq0oStS0OFwdoLQ2SGltA4cqahERXE4HUdPCaRgEQ5EzyvFb
                YbeZ0zCT//iPPhvVt21342KfK2qUgqTFuyFnCmyba6x1K4772au+17pfeKQF5L9aL4YrnunMhaq+
                eCIy4ATfXDSE36JYirzSOeTtc5wstM70yN/HkvO4hIjpiCqUiWoWyGPxbtZpjGU8v6IilozHJST0
                8kPFIvqSCmnRSPhBhYOxCP0cXfCmiGNzrJlPuF8aDSTeIyqFLpdnrKj+PN6tO22gBFBaVHWMpVbM
                cRsn3sDe+IAZ9Ti+ivCNqK3rQN+Jd1tPeajaiC5F8CH6pLV25dux3hqzR4D7hu9PsW3XSoRXBR6J
                d5tPUTQp/BEwRJmG2H+Jrn343pMRELNbhbX3vRopuOiYwD+JkIpqCPn8tIQ2qMJhgWcFIoLeDrI+
                +tLKe05W0EnHmbpuWPp1VJ9GxVZ01xl/bmEMUOUIqCUi49sSfhV9aeUP6Yfv40k7Htl7N+80Jl0c
                FGG+gENF3hY4dTfUhwEipIq0rmiorUvNdSsf7K+sfnmC2fs2bzEmXWQKXAbyLMKR9mPkPstQ+IH5
                0soVA5HRb9c8e9/mTUbBRUGEe0DyFf0XQb6ADN5xrqcTVHWNOSK4hK1b+31kHgzCtwoc1y9daBj6
                O1UJAB+LcE28lTPcUFhvrl1x3WDIGvDTbK1bsVYsnQMaEOFyVXahujHeShpG1IghPx0sYYPSvURe
                fnivaevloBERpqtQj+qW+OlocKGqR2k9D7drOlosYlwSXf3P2warrMGLO9i/pdkx+eIjQKkg3wDJ
                PWPGE5GjAul0CZLVl0xLr7VeWlE8AMk9ixqK+jsXLtkLcgClWYSbh1hdw40alCXRl1Y8PRTCh+QJ
                FsP+KkoB4FPVfwRCA5UZJ6gqf0apVdU9qtwfJXrWUJEBQ3kMwvLlBm/jJqshwR0xRiiyCuGiIStv
                kKFKOaIfCMwT0Qsjax6OPSZvABi+cymWLzec25vuFOEhwA+gUCiqucipdWilQhGqPkQshScsQ3/L
                6pVVw1H2sB8U4r7hvim2WhsEGdjXwYYKqrYKL4LxmBlI2MLGB2L7xtIgIS4ntzgWLL3SgNUIfTkN
                Nyv6miDloNNRmYKQflKFqEYUSkTIAjlhdJEqJSI8ZZjmf4bXP1oYD71API/SuWm52xFt+qJh61dU
                WChIj3MsVClB9C1RaUT0VsDRRbmqtoqUi2ohwtxOhyerKvtEGA30eaaGohWCrLHV+qM1K3lj52jY
                eOHUONto+XLDua1lDmJdJXANyOyeZyhqEGFpNBRZ7fK4/xuVHRj6PrZcinAzirf3N06DIM2qGhXh
                qI28aggHMGV39OVfbQc5pVycTg1CumP+3Vkuj+dLtH7x+QJUZyBt3/NSbQTxxXDoZUjResReYK55
                5P14NylWnJqEdMely73OtKZZ2DpDhDGK5IuSp2iOIGWtSzWERTgK9n6UrVFPyU6qpspwD8oDxf8B
                PkdX+O4IbkcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTAtMDhUMTI6NTE6MzkrMDA6MDBMadoK
                AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEwLTA4VDEyOjUxOjM5KzAwOjAwPTRitgAAACh0RVh0
                ZGF0ZTp0aW1lc3RhbXAAMjAyMi0xMC0wOFQxMjo1MTozOSswMDowMGohQ2kAAAAASUVORK5CYII=" />
                </svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
