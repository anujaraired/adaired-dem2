// import React from 'react';
// import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
// import Future_Proof from '../../../../../../public/assets/images/futureProof.png';

// const FutureProof = () => {
//   return (
//     <div
//       className={` bg-[#030A15] overflow-hidden p-[2rem] text-white relative rounded-2xl border px-[2rem] pb-[4rem] pt-[2rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300`}
//       style={{
//         backgroundImage: `url(${Future_Proof.src})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'bottom',
//         backgroundSize: 'contain',

//       }}
//     >
//       <div className="">
//         <h3 className="uppercase text-white">Future-Proof Your </h3>

//         <h2 className="text-white text-3xl font-bold">
//           Business With <br />
//           Smart{' '}
//           <span className="text-[#00A3FF] text-3xl font-bold">
//             Link Building Services.
//           </span>
//         </h2>

//         <p className="whitespace-pre-line py-[1rem] leading-relaxed text-white">
//           We combine the power of AI precision with editorial outreach to scale
//           your organic visibility, dominate search results and strengthen your
//           brand.
//         </p>

//         <div className="absolute bottom-[2rem]">
//           <SaveAndCancel
//             name={'Talk To an Expert!'}
//             isIcon={true}
//             className="absolute bottom-0 w-[12rem] lg:w-[14rem]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FutureProof;




import React from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Future_Proof from '../../../../../../public/assets/images/futureProof.png';

const FutureProof = () => {
  return (
    <div
      className="
        bg-[#030A15] overflow-hidden text-white relative
        rounded-2xl border
        px-6 py-8
        sm:px-8 sm:py-10
        lg:px-[2rem] lg:pb-[4rem] lg:pt-[2rem]
        transition-all duration-1000 ease-in-out
        hover:-translate-y-2 hover:shadow-xl hover:duration-300
      "
      style={{
        backgroundImage: `url(${Future_Proof.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'contain',
      }}
    >
      <div>
        <h3 className="uppercase text-white">
          Future-Proof Your
        </h3>

        <h2 className="text-white">
          Business With <br />
          Smart{' '}
          <span className="text-[#00A3FF] text-2xl sm:text-3xl lg:text-xl font-bold">
            Link Building Services.
          </span>
        </h2>

        <p className="whitespace-pre-line py-[1rem] text-white">
          We combine the power of AI precision with editorial outreach to scale
          your organic visibility, dominate search results and strengthen your
          brand.
        </p>

        {/* Button responsive but same position */}
        <div className="absolute bottom-[2rem]">
          <SaveAndCancel
            name="Talk To an Expert!"
            isIcon={true}
            buttonWidth="w-[12rem] lg:w-[14rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default FutureProof;
