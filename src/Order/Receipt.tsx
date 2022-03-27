import TemporaryDrawer from "../Drawer";



function orderNumber() {
    let now = Date.now().toString() // '1492341545873'
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10)
    // format
    return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
}


export const Receipt = () => {

    return (
        <div style={{ height: window.screen.height }}>
            <TemporaryDrawer />
            <div className="bg-ambar-50"  >
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 200, alignItems: 'center', flexDirection: 'column' }}>
                    <p style={{ fontSize: 24 }}>Thank you for your Order!</p>
                    <p style={{ fontSize: 20 }}>Your Order Number is: </p>
                    <p style={{ fontSize: 20 }}>{orderNumber()} </p>
                    <p style={{ textAlign: 'center' }}>Please email us at email@gmail.com with any questions</p>


                </div>

            </div>
        </div>
    )

}