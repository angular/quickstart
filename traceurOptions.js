// Set up Traceur to use options for AtScript
// AtScript requires
//  - Runtime Type Assertions (typeAssertions, typeAssertionModule)
//  - Types (types)
//  - Meta-data annotations (annotations)
System.traceurOptions = {
  annotations: true,
  memberVariables: true,
  typeAssertions: true,
  typeAssertionModule: 'rtts_assert/rtts_assert',
  types: true
};
