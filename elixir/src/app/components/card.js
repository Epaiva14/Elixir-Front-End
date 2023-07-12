import '../css/bulma.css';

export default function Card() {
    const style = {
        position: 'absolute',
        left: 0,
        top: '50%',
        width: '100%',
        zIndex: 2,
        backgroundColor: '#E3E0DE',
        justifyContent: 'center',
        maxWidth: '50%',
        borderRadius: '10px',
        marginLeft: '25%'

    }
    return (
        <div style={style}>

            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">Hello</p>
                            <p className="subtitle is-6">I am a bulma card</p>
                        </div>
                    </div>

                    <div className="content">
                        And I exist on this page as a placeholder
                    </div>
                </div>
            </div>
        </div>
    )
}