import { Link } from "react-router-dom"

function Jobs() {
    return (
        <>
            <div className="">
                <div id="job-headings" className="flex justify-between text-lg">
                    <div>Position</div>
                    <div>Company</div>
                    <div>Location</div>
                    <div>Date</div>
                    <div>Accomodations</div> 
                </div>
            {/*
            <section  className="heading">
                <h1>Find a jerb that fits you!</h1>
            </section>
            <Link to ="/" >
                Search for Jerb
            </Link>
            <Link to ="" >
                poop
            </Link>

                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            */}
            </div>
        </>

    )
}

export default Jobs;