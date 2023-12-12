export const WorkExplanation = (props) => {

  return (
    <div className='flex flex-col'>
      <p className='text-xl lg:text-5xl font-normal mb-3 lg:mb-2 lg:whitespace-nowrap tracking-tight break-keep'>{props['project-title-ko']}</p>
      <p className='text-xl lg:text-5xl font-normal mb-3 lg:mb-5 lg:whitespace-nowrap tracking-tight'>{props['project-title-en']}</p>
      <p className='text-sm lg:mb-8'>{props['designer-name-ko'] + " | " + props['designer-name-en']}</p>
      <p className='text-sm leading-7 hidden lg:block'>{props['project-description']}</p>
    </div>
  )
}
