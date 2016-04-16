package vibrante.model;

import java.util.List;

/**
 * Created by Fernando on 3/4/2016.
 */
public class Fila {

    private double alto;
    private int celdas;
    private List<Bloque> bloques;

    public double getAlto() {
        return alto;
    }

    public void setAlto(double alto) {
        this.alto = alto;
    }

    public int getCeldas() {
        return celdas;
    }

    public void setCeldas(int celdas) {
        this.celdas = celdas;
    }

    public List<Bloque> getBloques() {
        return bloques;
    }

    public void setBloques(List<Bloque> bloques) {
        this.bloques = bloques;
    }
}
