export default function Main() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          USC first Marketplace for USC students
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          buy and sell products including football tickets with authenticated/veirfed USC students only
          <br />
        </h2>
      </div>
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center"  style={{
              position: "relative",
              top: "-60px",
        }}>
          <div class="py-2 md:py-0">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
      <div className="relative container flex flex-col items-center justify-center mx-auto">
  <img
    className="object-cover object-center w-1/2 mb-10 border shadow-md g327"
    src="./Landingpage.jpg" // Set the image source here
    alt="Placeholder Image"
    style={{
      opacity: 0, 
    }}

  />
<div
  className="absolute top-0 left-0 w-full h-full"
  style={{
    backgroundImage: "url('/Landingpage.jpg')",
    backgroundSize: "70%", 
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    opacity: 0.5, // Adjust the opacity as needed
  }}
></div>

</div>


    </section>
  );
}
