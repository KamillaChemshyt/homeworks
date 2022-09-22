const statusColor = {
    'Open': '#DC143C',
    'In Progress': '#FFFF00',
    'Done': '#7CFC00',
}

export const changeColorByStatus = (status) => {
    return statusColor[status];
}