package com.indra.notes.cfg;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class AppInitializer implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		WebApplicationContext appCtx = getContext();		
		servletContext.addListener(new ContextLoaderListener(appCtx));		
		ServletRegistration.Dynamic dispatcher = servletContext.addServlet("DispatcherServlet", new DispatcherServlet(appCtx));
		dispatcher.setLoadOnStartup(1);
		dispatcher.addMapping("/mvc/*");
		
	}
	
	private AnnotationConfigWebApplicationContext getContext()	{
		AnnotationConfigWebApplicationContext appCtx = new AnnotationConfigWebApplicationContext();
		appCtx.setConfigLocation("com.indra.notes.cfg");
		return appCtx;
	}
	
}
