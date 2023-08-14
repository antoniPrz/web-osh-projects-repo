import { NewCard } from "./NewCard/Index.jsx";
import { Projectcard } from "./ProjectCard.jsx";

export function Main() {
  return (
    <div className="px-4 py-10 bg-sky-50 h-screen flex flex-col gap-8 overflow-y-scroll ">
      {/* <Projectcard/> */}
      <NewCard
        imageUrl={
          "https://images.unsplash.com/photo-1631378297854-185cff6b0986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
        }
        name={"Anastasia Koch"}
        projectName={"DataLogger"}
        avatarImgUrl={"https://github.com/alisha17.png"}
      />
      <NewCard
        imageUrl={
          "https://desdeelconocimiento.com.ar/wp-content/uploads/vino2.jpg"
        }
        name={"Dani Rodriguez"}
        projectName={"Colorimetro"}
        avatarImgUrl={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
      />
      <NewCard
        imageUrl={
          "https://federicilabdotcom.files.wordpress.com/2019/07/dsc01971.jpg"
        }
        name={"Antonio Ramirez"}
        projectName={"Micros OpenS"}
        avatarImgUrl={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      />
      <NewCard
        imageUrl={
          "https://stamparein3d.it/wp-content/uploads/2020/05/Il-colorimetro-open-source-a-schema-del-design-della-custodia-in-OpenSCAD-e-b-custodia-assemblata-con-elettronica.jpg"
        }
        name={"Ana Roa"}
        projectName={"Fluo Pi"}
        avatarImgUrl={"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
      />
      <NewCard
        imageUrl={
          "https://alexandre.barachant.org/images/blog/ganglion/headset.JPG"
        }
        name={"Marta Caseres"}
        projectName={"Open BCI"}
        avatarImgUrl={"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"}
      />
    </div>
  );
}
