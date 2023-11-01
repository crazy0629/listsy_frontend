const calcCompareTime = (sDate: string, eDate: string) => {
  let value = Math.floor(
    (new Date(sDate).getTime() - new Date(eDate).getTime()) / 1000 / 60
  );

  if (value === 0) {
    return "now";
  } else if (value > 0 && value <= 60) {
    return Math.floor(value) + " mins ago";
  } else if (value > 60 && value <= 1440) {
    return Math.floor(value / 60) + " hours ago";
  } else if (value > 1440 && value <= 43200) {
    return Math.floor(value / (60 * 24)) + " days ago";
  } else if (value > 43200 && value <= 518400) {
    return Math.floor(value / (60 * 24 * 30)) + " months ago";
  } else if (value > 518400) {
    return Math.floor(value / (60 * 24 * 30 * 12)) + " years ago";
  }
};

const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

const getTimestamp = (time: number) => {
  // var hours = parseInt(time / (60 * 60), 10);
  var hours = parseInt((time / (60 * 60)).toString(), 10);
  var minutes = parseInt((time / 60).toString(), 10);
  var seconds = time % 60;
  if (hours == 0) {
    return minutes + ":" + seconds.toFixed(0);
  } else {
    return hours + ":" + minutes + ":" + seconds.toFixed(0);
  }
};

export { calcCompareTime, formatBytes, getTimestamp };
