const Contact = () => {
  return (
    <div className="bg-primaryBackground">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 w-full max-w-6xl p-8 rounded-xl shadow-[0_0_40px_0] shadow-[#0004] md:flex-row md:space-x-6 md:space-y-0 justify-between sm:p-12">
          <div className="flex flex-col justify-between mx-10 ">
            <div className="text-indigo-600">
              <h1 className="font-bold text-3xl tracking-wide">Contact Us</h1>
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_52683-76159.jpg?w=996&t=st=1688659741~exp=1688660341~hmac=4d6da619c292d3bcef3685a2b8140216a34325791e32d0658e76af521ef7e6d3"
                alt="contact image"
              />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-80">
              <form action="" className="flex flex-col space-y-4 w-full">
                <div>
                  <label htmlFor="" className="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="ring-1 ring-stone-900 w-full rounded-md px-4 py-2 outline-none mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email "
                    className="ring-1 ring-stone-900 w-full rounded-md px-4 py-2 outline-none mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    placeholder="message"
                    rows="4"
                    className="ring-1 ring-stone-900 w-full rounded-md px-4 py-2 outline-none mt-2"
                  />
                </div>

                <button
                  className="inline-block self-end bg-primaryBackground
               text-white rounded-lg font-bold  py-4 px-6 uppercase text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
