export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} 只能在appModule中载入，请不要在其它Module中载入`
    );
  }
}
