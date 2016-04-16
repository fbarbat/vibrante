package vibrante.model;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

/**
 * Created by Fernando on 3/4/2016.
 */
public class DibujadorCuadro {

    public void guardar(Painting painting) throws IOException {
        BufferedImage bufferedImage = new BufferedImage((int) painting.getAncho(), (int) painting.getAlto(), BufferedImage.TYPE_INT_RGB);
        Graphics2D graphics = bufferedImage.createGraphics();

        graphics.setBackground(painting.getFondo());
        graphics.clearRect(0, 0, (int) painting.getAncho(), (int) painting.getAlto());

        double y = painting.getMargen();
        for (Fila fila : painting.getFilas()) {
            double x = painting.getMargen();
            double altoFila = fila.getAlto();

            double anchoCelda = (painting.getAnchoFila() - (fila.getCeldas() - 1.0) * painting.getAnchoSeparacionCeldas()) / fila.getCeldas();

            for (Bloque bloque : fila.getBloques()) {

                Color inicial = painting.getFondo();
                Color fin = bloque.getTonalidad();
                if (bloque.isIzquierdaADerecha()) {
                    Color aux = inicial;
                    inicial = fin;
                    fin = aux;
                }
                int rDelta = (fin.getRed() - inicial.getRed()) / bloque.getCeldas();
                int gDelta = (fin.getGreen() - inicial.getGreen()) / bloque.getCeldas();
                int bDelta = (fin.getBlue() - inicial.getBlue()) / bloque.getCeldas();

                graphics.setPaint(inicial);
                Color anterior = inicial;
                graphics.fill(new Rectangle2D.Double(x, y, anchoCelda, altoFila));

                x += anchoCelda;
                x += painting.getAnchoSeparacionCeldas();

                for (int i = 1; i < bloque.getCeldas(); i++) {

                    Color nuevo = new Color(anterior.getRed() + rDelta, anterior.getGreen() + gDelta, anterior.getBlue() + bDelta);
                    graphics.setPaint(nuevo);
                    graphics.fill(new Rectangle2D.Double(x, y, anchoCelda, altoFila));
                    anterior = nuevo;

                    x += anchoCelda;
                    x += painting.getAnchoSeparacionCeldas();
                }

            }

            y += altoFila;
            y += painting.getSeparacionFilas();
        }

        File outputfile = new File("target/painting.png");
        ImageIO.write(bufferedImage, "png", outputfile);
        System.out.println("Painting generado.");
    }
}
