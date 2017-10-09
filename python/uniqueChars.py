def uniqueChars(str):
  d = dict()
  for c in str:
    if d.has_key(c):
      return False
    else:
      d[c] = 1
  return true

