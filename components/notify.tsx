import React from 'react'
import Link from 'next/link'

const Notify = () => {
  return (
    <section className="flex justify-center w-full md:h-28 items-center bg-slate-50 dark:bg-slate-600">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-2xl items-center px-3 py-8 md:px-0 md:py-0 md:px-6 lg:px-8">
        <div className="flex flex-row items-center">
          <div className="mr-4">
            <svg width="48px" height="48px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>Artboard</title>
              <desc>Created with Sketch.</desc>
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="99.2583404%" id="linearGradient-1">
                  <stop stopColor="#2AABEE" offset="0%"></stop>
                  <stop stopColor="#229ED9" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle id="Oval" fill="url(#linearGradient-1)" cx="500" cy="500" r="500"></circle>
                <path
                  d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
                  id="Path-3"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </div>
          <div className="dark:text-gray-0">
            <h2 className="text-xl font-semibold">Общайтесь с сообществом</h2>
            <p className="mt-1 opacity-70">
              Не стесняйтесь задавать вопросы, сообщать о проблемах и знакомиться с новыми людьми.
            </p>
          </div>
        </div>
        <Link href="https://t.me/the_ninja_turtles_api">
          <a
            target="_blank"
            className="bg-primary hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-sky-300 text-white-900 font-semibold h-12 px-6 rounded-lg w-full flex items-center dark:ring-0 justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/5 dark:hover:bg-sky-400"
          >
            @TNTAPI Telegram
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Notify
