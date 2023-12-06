export const WorkExplanation = (props) => {

  return (
    <div className='flex flex-col'>
      <p className='text-2xl lg:text-5xl font-normal mb-3 lg:mb-4'>{props['project-title-ko']}</p>
      <p className='text-sm lg:mb-8'>{props['designer-major'] + " | " + props['designer-name-ko']}</p>
      <p className='text-sm leading-7 hidden lg:block'>{props['project-description']}</p>
    </div>
  )
}
