

const NewsLetter = () => {
    return (
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[90%] z-10 border border-gray-200 rounded-lg ">
  
<section class="bg-[linear-gradient(to_right,_#FFD700,_#FFFFFF,_#FFFFFF,_#FF69B4)] py-12 px-4 sm:px-8 lg:px-16 text-center rounded-lg m-2 ">
  <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter.</h2>
  <p class="text-gray-600 mb-6">Get the latest news, updates and special offers delivered directly to your inbox.</p>
  <form class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
    <input type="email" placeholder="Enter your email" class="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <button type="submit" className="text-black bg-[linear-gradient(to_right,_#FF69B4,#FFD700)]

 px-6 py-2 font-semibold rounded-md  transition">Subscribe</button>
  </form>
</section>



        </div>
    );
};

export default NewsLetter;