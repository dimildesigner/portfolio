'use client'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from '@cloudinary/react';

export default function VideoPlayer({ publicId }) {
  const cld = new Cloudinary({
    cloud: { cloudName: 'SEU_CLOUD_NAME' } // Substitua pelo seu Cloud Name
  });

  const myVideo = cld.video(publicId);

  return (
    <div className="relative group w-full overflow-hidden rounded-2xl">
      {/* Camada invisível de sobreposição para impedir clique direito direto no player */}
      <div className="absolute inset-0 z-10 cursor-default"></div>
      
      <AdvancedVideo 
        cldVid={myVideo} 
        controls 
        className="w-full aspect-video bg-black"
      />
    </div>
  );
}