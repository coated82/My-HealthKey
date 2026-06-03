export function Header(){
  return(
    <div style={{
      backgroundColor: '#F8F9FA',  // tom de branco
      height: '80px',              // altura padrão de header
      width: '100%',              // largura total da tela
      display: 'flex',
      alignItems: 'center',
      padding: '0 120px'          // margens laterais (desktop)
    }}>
      <div>
        <img src="/my-healthkey/public/Logo.png" alt="Logo" />
        <h1>Começo do header</h1>
      </div>
    </div>
  )
}