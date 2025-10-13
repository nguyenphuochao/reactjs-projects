function BackToTop({goToTop, handleBackToTop}) {
    return (
        <button onClick={handleBackToTop} style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: goToTop ? 'block' : 'none'
        }}><i style={{ fontSize: '30px' }} className="fa-regular fa-circle-up"></i></button>
    )
}

export default BackToTop
