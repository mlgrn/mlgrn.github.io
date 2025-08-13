<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Footer from '$lib/components/common/footer/footer.svelte';

</script>


<TitledPage title="Contact">
    <div class="mx-auto w-full max-w-lg px-4 sm:px-6">
        
            <h4 class="text-xl md:text-3xl font-semibold text-center ">
              Email me using the form below</h4>
   
              <br />
        <div class="flex justify-center items-center space-x-2">
            <i class="i-carbon-email text-3xl align-middle mr-3 animate-pulse gradient-icon" ></i>
            <p class="text-sm pl-4">
            I am available for freelance, contract, or full time opportunities.
            </p>
        </div>
    <br />
            
        <div class="flex justify-center items-center space-x-2">
            <i class="i-carbon-location-current text-3xl align-middle mr-3 animate-pulse gradient-icon" ></i>
            <p class="text-sm pl-4">Remote or NYC area</p>
        </div>
        <br />
            
    
         


              
        <form method="POST" action="?/create" class="rounded-lg border bg-white shadow-sm dark:bg-neutral-900">
            <div class="space-y-4 p-4 sm:p-6">
                <div>
                    <label for="name" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        autocomplete="name"
                        class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label for="email" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        autocomplete="email"
                        class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label for="subject" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Email Subject"
                        class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label for="message" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        rows="5"
                        class="w-full resize-vertical rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <style>
                    @keyframes gradientAnimation {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

                    @keyframes clickAnimation {
                        0% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(0.95);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                    .gradient-icon {
                        background: linear-gradient(90deg, #8a2be2, #9400d3); /* More Purple */


                    }
                    .gradient-button {
                        background: linear-gradient(90deg, #8a2be2, #9400d3); /* More Purple */
                        background-size: 200% 200%;
                        color: white;
                        border-radius: 0.5rem;
                        padding: 0.5rem 1rem;
                        border: 2px solid #8a2be2; /* Purple */
                        transition: background 0.3s ease, transform 0.3s ease;
                        display: block;
                        margin: 0 auto;
                        animation: gradientAnimation 3s linear infinite;
                        font-weight: bold; /* Make font bold */
                    }

                    .gradient-button:hover {
                        transform: scale(1.05);
                    }

                    .gradient-button:active {
                        animation: clickAnimation 0.2s ease; 
                    }

                        
                </style>
                <button type="submit" class="gradient-button">
                    Submit
                </button>

            </div>
        </form>
    </div>
</TitledPage>
<Footer />

