export function handleChangeById(event, comp) {
    //console.log("Changed value for " + event.target.id + ": " + event.target.value);
    comp.setState({ [event.target.id] : event.target.value});
}