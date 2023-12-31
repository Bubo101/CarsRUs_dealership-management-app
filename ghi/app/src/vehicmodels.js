function ModelList(props) {

    return (
        <> 
        <div className="shadow p-4 mt-4">
        <h1>Model List</h1>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Picture</th>
        </tr>
        </thead>
        <tbody>
        {props.models ? props.models.map(model => {
            return (
            <tr key={model.id}>
                <td>{ model.name }</td>
                <td>{ model.manufacturer.name }</td>
                <td><img src ={model.picture_url} width= "300"/></td>
            </tr>
            );
        }):null}
        </tbody>
    </table>
    </div>
        </> 
    );
};

export default ModelList;