
const AboutPage = () => {
  return (
    <div className="w-full py-2 flex items-center justify-center">
    <div className="w-[90%] h-full flex items-center justify-between ">
        <div className="w-[60%] ">
            <div className="h-[350px] flex w-[90%]  gap-2">

            <div className="h-[100%] w-[50%] bg-red-500 rounded-l-[10px]">
            <img src="" alt="img" />
          </div>

          <div className="w-[50%] h-full gap-2 flex flex-col">
          <div className="h-[50%] w-[100%] bg-yellow-300 rounded-tr-[10px]">
            <img src="" alt="img" />
          </div>
          <div className="h-[50%] w-[100%] bg-indigo-500 rounded-br-[10px]">
            <img src="" alt="img" />
          </div>
          </div>
            </div>
            </div>
    
        <div className="w-[60%] max-md:w-[40%] ">
            <p className="text-[26px] tracking-wider text-[#808080] font-extrabold">about <span className="text-[red]">FOODFLEX</span></p>
            <p className="text-[15px] md:text-[14px] md:leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sapiente vero ad quas, maxime molestias nostrum placeat delectus aliquid adipisci obcaecati quod dolor a saepe totam optio iusto error fugiat. Laboriosam sed aliquid possimus dolorum a consectetur mollitia recusandae ipsum est ea temporibus necessitatibus exercitationem, magni sit laborum vitae aliquam.</p>
        </div>
       
    </div>
</div>
  )
}

export default AboutPage