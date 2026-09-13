import { Container } from "react-bootstrap"

function ErrorPage() {
    return (
        <Container className="error-page">
            <div className="error-msg">
                <h1 className="center-title">404 Error Page</h1>
                <p>Nothing to see here!</p>
            </div>
        </Container>
    )
}

export default ErrorPage