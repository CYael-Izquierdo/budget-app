export const getBackgroundByPercent = (budget, remaining) => {
    let className;

    if (budget * .25 > remaining) {
        className = "alert alert-danger";
    } else if (budget * .50 > remaining) {
        className = "alert alert-warning";
    } else {
        className = "alert alert-success";
    }

    return className;
}