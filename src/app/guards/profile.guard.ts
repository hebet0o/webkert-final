import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const profileGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  let currentUser = sessionStorage.getItem("currentUser");
  if(!currentUser){
    router.navigate(["/login"]);
    return false;
  }
  else{
    return true;
  }
};
