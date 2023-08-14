import PropTypes from 'prop-types'

export function NewCard({imageUrl, name ,projectName,avatarImgUrl}) {


  NewCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    projectName:  PropTypes.string.isRequired,
    avatarImgUrl:  PropTypes.string.isRequired,
  }

  NewCard.defaultProps = {
    imageUrl: 'https://images.unsplash.com/photo-1631378297854-185cff6b0986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
    name: 'Nombre',
    projectName: 'Nombre del proyecto',
    avatarImgUrl: 'https://images.unsplash.com/photo-1593349480506-8433634cdcbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3QlMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'


  }

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

