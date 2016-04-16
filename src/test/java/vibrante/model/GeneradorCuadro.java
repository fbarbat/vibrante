package vibrante.model;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by Fernando on 3/4/2016.
 */
public class GeneradorCuadro {
//    private static final int ANCHO = 800;
//    private static final int ALTO = 600;
//    private static final int MARGEN = 20;
//    private static final int SEPARACION_FILAS = 10;
//    private static final int ANCHO_SEPARACION_CELDAS = 2;
//
//    private static final int CANTIDAD_FILAS_MINIMO = 5;
//    private static final int CANTIDAD_FILAS_MAXIMO = 10;
//    private static final double DESVIACION_FILA_MAXIMA = .5;
//
//    private static final int CANTIDAD_CELDAS_MINIMO = 40;
//    private static final int CANTIDAD_CELDAS_MAXIMO = 60;
//
//    private static final int CANTIDAD_BLOQUES_MINIMO = 3;
//    private static final int CANTIDAD_BLOQUES_MAXIMO = 5;
    private static final int ANCHO = 1920;
    private static final int ALTO = 1080;
    private static final int MARGEN = 50;
    private static final int SEPARACION_FILAS = 20;
    private static final int ANCHO_SEPARACION_CELDAS = 4;

    private static final int CANTIDAD_FILAS_MINIMO = 5;
    private static final int CANTIDAD_FILAS_MAXIMO = 20;
    private static final double DESVIACION_FILA_MAXIMA = .5;

    private static final int CANTIDAD_CELDAS_MINIMO = 80;
    private static final int CANTIDAD_CELDAS_MAXIMO = 120;

    private static final int CANTIDAD_BLOQUES_MINIMO = 3;
    private static final int CANTIDAD_BLOQUES_MAXIMO = 10;

    private Random random = new Random();

    public Painting crear() {
        Painting painting = new Painting();
        painting.setAlto(ALTO);
        painting.setAncho(ANCHO);
        painting.setMargen(MARGEN);
        painting.setFondo(Color.BLACK);
        painting.setSeparacionFilas(SEPARACION_FILAS);
        painting.setAnchoSeparacionCeldas(ANCHO_SEPARACION_CELDAS);
        painting.setFilas(crearFilas());
        return painting;
    }

    private List<Fila> crearFilas() {
        int[] altosFilas = generarAltosFilas(ALTO - MARGEN * 2);

        List<Fila> resultado = new ArrayList<>(altosFilas.length);
        for (Integer alto : altosFilas) {
            Fila fila = new Fila();
            fila.setAlto(alto);
            fila.setCeldas(random.nextInt(CANTIDAD_CELDAS_MAXIMO + 1 - CANTIDAD_CELDAS_MINIMO) + CANTIDAD_CELDAS_MINIMO);
            fila.setBloques(generarBloques(fila.getCeldas()));
            resultado.add(fila);
        }

        return resultado;
    }

    private List<Bloque> generarBloques(int celdas) {
        int cantidadBloques = random.nextInt(CANTIDAD_BLOQUES_MAXIMO + 1 - CANTIDAD_BLOQUES_MINIMO) + CANTIDAD_BLOQUES_MINIMO;
        List<Bloque> bloques = new ArrayList<>(cantidadBloques);
        int[] celdasEnBloques = distibuirCeldasEnBloques(celdas, cantidadBloques);
        Bloque bloqueAnterior = null;
        for (Integer celdasEnBloque : celdasEnBloques){
            Bloque bloque = new Bloque();
            bloque.setCeldas(celdasEnBloque);
            bloque.setTonalidad(generarTonalidad());
            if (bloqueAnterior == null){
                bloque.setIzquierdaADerecha(random.nextBoolean());
            } else {
                if (bloqueAnterior.getTonalidad().equals(bloque.getTonalidad())){
                    bloque.setIzquierdaADerecha(random.nextBoolean());
                } else {
                    bloque.setIzquierdaADerecha(bloqueAnterior.isIzquierdaADerecha());
                }
            }
            bloques.add(bloque);
            bloqueAnterior = bloque;
        }

        return bloques;
    }

    private Color generarTonalidad() {
        if (random.nextBoolean()){
//            return new Color(193, 18, 34);
            return new Color(193,37,13);

        } else {
//            return new Color(193, 189, 184);
            return new Color(233,197,161);
        }
    }

    private int[] distibuirCeldasEnBloques(int cantidadCeldas, int cantidadBloques){

        int[] resultado = new int[cantidadBloques];

        for (int i = 0; i < cantidadBloques; i++){
            resultado[i]++;
        }
        int cantidadCeldasRestantes = cantidadCeldas - cantidadBloques;

        for (int i = 0; i < cantidadCeldasRestantes; i++){
            resultado[random.nextInt(cantidadBloques)]++;
        }
        return resultado;
    }

    private int[] generarAltosFilas(int altoDibujable) {
        int cantidadFilas = random.nextInt(CANTIDAD_FILAS_MAXIMO + 1 - CANTIDAD_FILAS_MINIMO) + CANTIDAD_FILAS_MINIMO;
        double[] ponderaciones = new double[cantidadFilas];
        double total = 0;
        double totalFilas = altoDibujable - (cantidadFilas - 1) * SEPARACION_FILAS;
        double valorPromedio = totalFilas / cantidadFilas;
        for (int i = 0; i < cantidadFilas; i++) {
            double ponderacion = valorPromedio * (1 +  (random.nextBoolean() ? 1.0 : -1.0) * random.nextDouble() * DESVIACION_FILA_MAXIMA);
            ponderaciones[i] = ponderacion;
            total += ponderacion;
        }
        int[] resultado = new int[cantidadFilas];
        for (int i = 0; i < cantidadFilas; i++) {
            resultado[i] = (int) (ponderaciones[i] / total * totalFilas);
        }
        return resultado;
    }


}
