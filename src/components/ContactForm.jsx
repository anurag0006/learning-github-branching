import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_os29hut', 'template_rjdrx6b', form.current, 'YL0mh6LCBo5YEOpg6')
      .then((result) => {
        console.log(result.text);
        toast("message sent successfully");
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
        toast.error("error in sending message");
      });
  };

  return (
    <>
      <section class="text-gray-600 body-font relative dark:bg-gray-800">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"> */}
            {/* <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
            <div class="bg-white relative flex flex-wrap py-8 rounded shadow-md dark:bg-gray-800" >
              <div class="lg:w-1/2 px-2">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p class="mt-1 text-gray-400">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div class="lg:w-1/2 px-8 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a class="text-red-500 leading-relaxed">anurag.kamboj.mat21@itbhu.ac.in</a>
                <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p class="leading-relaxed text-gray-400">9877240866</p>
              </div>
            </div>
          {/* </div> */}
          <div class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 dark:bg-gray-800">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-white">Feedback</h2>
            <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <form ref={form} onSubmit={sendEmail}>
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Name</label>
                <input type="text" id="name" name="user_name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
                <input type="email" id="email" name="user_email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-400">Message</label>
                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Send</button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />

    </>

  )
}

export default ContactForm









{/* <form ref={form} onSubmit={sendEmail}>
<div className='flex flex-col p-4 gap-y-4 items-center'>
<label>Name</label>
<input className='border border-indigo-600' type="text" name="user_name" />
<label>Email</label>
<input className='border border-indigo-600' type="email" name="user_email" />
<label>Message</label>
<textarea className='border border-indigo-600' name="message" />
<input className='cursor-pointer border border-black p-2 w-[100px]' type="submit" value="Send" />

</div>
</form> */}