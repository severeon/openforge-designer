const clamp = (v, c) => {
  if (v < 0) {
    return -c
  } else if (v > 0) {
    return c
  }

  return 0
}

export default {clamp}
