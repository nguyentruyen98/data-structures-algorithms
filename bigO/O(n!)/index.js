function nFacRuntimeFunc(n) {
  for (let i = 0; i < n; i++) {
    nFacRuntimeFunc(n - 1);
  }
}
