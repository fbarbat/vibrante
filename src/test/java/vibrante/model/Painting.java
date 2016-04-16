package vibrante.model;

import java.awt.*;
import java.util.List;

/**
 * Created by Fernando on 3/4/2016.
 */
public class Painting {

    private double alto;
    private double ancho;
    private Color fondo;
    private double margen;
    private double separacionFilas;
    private double anchoSeparacionCeldas;
    private List<Fila> filas;

    public double getAlto() {
        return alto;
    }

    public void setAlto(double alto) {
        this.alto = alto;
    }

    public double getAncho() {
        return ancho;
    }

    public void setAncho(double ancho) {
        this.ancho = ancho;
    }

    public Color getFondo() {
        return fondo;
    }

    public void setFondo(Color fondo) {
        this.fondo = fondo;
    }

    public double getMargen() {
        return margen;
    }

    public void setMargen(double margen) {
        this.margen = margen;
    }

    public double getSeparacionFilas() {
        return separacionFilas;
    }

    public void setSeparacionFilas(double separacionFilas) {
        this.separacionFilas = separacionFilas;
    }

    public double getAnchoSeparacionCeldas() {
        return anchoSeparacionCeldas;
    }

    public void setAnchoSeparacionCeldas(double anchoSeparacionCeldas) {
        this.anchoSeparacionCeldas = anchoSeparacionCeldas;
    }

    public List<Fila> getFilas() {
        return filas;
    }

    public void setFilas(List<Fila> filas) {
        this.filas = filas;
    }

    public double getAnchoFila() {
        return ancho - margen * 2;
    }
}
