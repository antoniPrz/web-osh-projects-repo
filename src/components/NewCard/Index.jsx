export function NewCard({imageUrl, name ,description,projectName,avatarImgUrl}) {
    return (
        <div className="max-w-md mx-4 bg-white border  border-black  ">

        <div className="h-48">
        <div className="flex items-center gap-2 py-1 px-2">
            <img src={avatarImgUrl} alt=""  className="h-6 w-6 rounded-full object-cover"/>
            <span className=" font-light text-sm">{name}</span>
        </div>
          <div className="">
            <img className="h-32 w-full object-cover " src={imageUrl} alt={name} />
          </div>
          <div className="p-2">
            <div className=" tracking-wide  text-black font-medium">{projectName}</div>
           
          </div>
        </div>
      </div>

     );
}

