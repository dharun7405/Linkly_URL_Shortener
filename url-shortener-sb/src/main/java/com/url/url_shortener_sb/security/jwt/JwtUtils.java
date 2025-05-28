package com.url.url_shortener_sb.security.jwt;

import jakarta.servlet.http.HttpServletRequest;

public class JwtUtils {
    //AUTHORIZATION -> BEARER <TOKEN>
    public String getJwtFromHeader(HttpServletRequest request){
        String bearerToken = request.getHeader("Authorization");
        if(bearerToken != null && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7);
        }
        return  null;
    }
}
