import Image from "next/image"
import image from "../assets/images/image-retro-pcs.jpg"
export default function Home() {
  return (
    <main className="flex flex-col p-4 sm:p-0">
      <section className="gridTemplate gap-5 my-8 ">
        <div className="col-span-full order-1 sm:[grid-area:image] ">
          <img
            src="/image-web-3-desktop.jpg"
            alt="image-games"
            className="object-cover hidden sm:block"
          />
          <img
            src="/image-web-3-mobile.jpg"
            alt="image-games"
            className="object-cover block sm:hidden"
          />
        </div>
        <aside className="col-span-full order-4 sm:[grid-area:new] p-4 bg-[#00001a] text-white">
          <div className="border-b-[1px] border-b-gray-50">
            <h1 className="text-[#e9ab53] text-3xl mb-4">New</h1>
            <h2 className="font-extrabold py-2">Hydrogen VS Electric Cars</h2>
            <h3 className="font-extralight mb-4">
              Will hydrogen-fueled cars ever catch up to EVs?
            </h3>
          </div>
          <div className="border-b-[1px] border-b-gray-50 py-4">
            <h2 className="font-extrabold py-2">
              The Downsides of AI Artistry
            </h2>
            <h3 className="font-extralight mb-4">
              What are the possible adverse effects of on-demand AI image
              generation?
            </h3>
          </div>
          <div className=" py-4">
            <h2 className="font-extrabold py-2">Is VC Funding Drying Up?</h2>
            <h3 className="font-extralight">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </h3>
          </div>
        </aside>
        <div className="col-span-full order-2 sm:[grid-area:title]">
          <h1 className="text-5xl text-[#00001a] font-extrabold">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="col-span-full order-3 sm:[grid-area:description]">
          <p className="text-sm">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling the promise?
          </p>
          <div className="mt-8">
            <button className="bg-[#f15e50] py-3 px-8 tracking-widest text-xs font-bold hover:text-white hover:bg-[#00001a] cursor-pointer">
              READ MORE
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-1 flex-col sm:flex-row my-4 gap-8 flex-wrap">
        <div className="flex flex-1 sm:flex-row gap-6">
          <div
            className="min-w-[120px] h-[160px]"
            style={{
              backgroundImage: "url(/image-retro-pcs.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover"
            }}
          >
          </div>
          <div>
            <h2 className="text-[#f15e50] text-3xl">01</h2>
            <h3 className="font-extrabold hover:text-[#f15e50] cursor-pointer">Reviving Retro PCs</h3>
            <p className="font-extralight text-sm">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-row gap-6">
          <div
            className="min-w-[120px] h-[160px]"
            style={{
              backgroundImage: "url(/image-top-laptops.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover"
            }}
          >
          </div>
          <div>
            <h2 className="text-[#f15e50] text-3xl">02</h2>
            <h3 className="font-extrabold hover:text-[#f15e50] cursor-pointer">Top 10 Laptops of 2022</h3>
            <p className="font-extralight text-sm">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-row gap-6">
          <div
            className="min-w-[120px] h-[160px]"
            style={{
              backgroundImage: "url(/image-gaming-growth.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover"
            }}
          >
          </div>
          <div>
            <h2 className="text-[#f15e50] text-3xl">03</h2>
            <h3 className="font-extrabold hover:text-[#f15e50] cursor-pointer">The Growth of Gaming</h3>
            <p className="font-extralight text-sm">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
