package vibrante.model;


import java.awt.*;

/**
 * Created by Fernando on 3/4/2016.
 */
public class Bloque {

    private int celdas;
    private Color tonalidad;
    private boolean izquierdaADerecha;

    public int getCeldas() {
        return celdas;
    }

    public void setCeldas(int celdas) {
        this.celdas = celdas;
    }

    public Color getTonalidad() {
        return tonalidad;
    }

    public void setTonalidad(Color variacion) {
        this.tonalidad = variacion;
    }

    public boolean isIzquierdaADerecha() {
        return izquierdaADerecha;
    }

    public void setIzquierdaADerecha(boolean izquierdaADerecha) {
        this.izquierdaADerecha = izquierdaADerecha;
    }
}
