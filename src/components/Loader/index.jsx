import loading from '../../assets/loading.svg'

export function Loader() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <img src={loading} alt="Imagem de carregamento" />
    </div>
  )
}